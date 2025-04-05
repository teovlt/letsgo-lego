const ObjectId = require('mongoose').Types.ObjectId
const AuctionModel = require('../models/auction.model')
const { createAuctionErrors } = require('../utils/errors.utils')

const interval = 5 * 60 * 1000

module.exports.listAuctions = async (req, res) => {
    const auctions = await AuctionModel.find().sort('-createdAt')
    res.status(200).json(auctions)
}

module.exports.auctionInfo = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send(`Invalid ID : ${req.params.id}`)

    const auction = await AuctionModel.findOne({ _id: req.params.id })
    return res.status(200).json(auction)
}

module.exports.createAuction = async (req, res) => {
    const { sellerId, name, description, type, category, state, picture, startPrice, reservePrice } = req.body
    try {
        const auction = await AuctionModel.create({
            sellerId,
            name,
            description,
            type,
            category,
            state,
            picture,
            startPrice,
            reservePrice,
            currentPrice: startPrice,
        })
        return res.status(201).json(auction)
    } catch (err) {
        const errors = createAuctionErrors(err)
        return res.status(500).json(errors)
    }
}

module.exports.deleteAuction = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send(`Invalid ID : ${req.params.id}`)

    try {
        await AuctionModel.findOneAndDelete({ _id: req.params.id })
        return res.status(202).json({ message: 'Successfully deleted' })
    } catch (err) {
        return res.status(500).json(err)
    }
}

module.exports.placeABid = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send(`Invalid ID : ${req.params.id}`)

    const { biderId, bid } = req.body

    try {
        const auction = await AuctionModel.findOne({ _id: req.params.id })
        if (auction.finished) return res.status(400).send(`The auction "${req.params.id}" is finished`)

        switch (auction.type) {
            case 'TREND_UP':
                if (bid <= auction.currentPrice)
                    return res
                        .status(400)
                        .send(`Invalid bid, minimum : ${auction.currentPrice + auction.startPrice * 0.1}`)

                await auction.updateOne(
                    {
                        $push: {
                            bids: {
                                biderId,
                                bid,
                                timestamps: new Date().getTime(),
                            },
                        },
                        $set: {
                            currentPrice: bid,
                        },
                    },
                    { new: true, setDefaultsOnInsert: true },
                    (err, docs) => {
                        if (!err) return res.status(201).json({ docs })
                        else return res.status(400).json({ err })
                    }
                )
                break
            case 'TREND_DOWN':
                if (bid < auction.reservePrice) return res.status(400).send(`Invalid bid`)

                await auction.updateOne(
                    {
                        $push: {
                            bids: {
                                biderId,
                                bid,
                                timestamps: new Date().getTime(),
                            },
                        },
                        $set: {
                            currentPrice: bid,
                            finished: true,
                        },
                    },
                    { new: true, setDefaultsOnInsert: true },
                    (err, docs) => {
                        if (!err) return res.status(201).json({ docs })
                        else return res.status(400).json({ err })
                    }
                )
                break
            default:
                return res.status(400).send(`Bad auction type: ${auction.type}`)
        }
    } catch (err) {
        return res.status(500).json(err)
    }
}

setInterval(async () => {
    try {
        const activeAuctions = await AuctionModel.find({ finished: false, type: 'TREND_DOWN' })
        if (!activeAuctions) console.log('No active auctions')
        else {
            activeAuctions.forEach(async auction => {
                const diff = auction.startPrice - auction.reservePrice
                const increment = diff / ((24 * 7 * 60) / 5)
                auction.currentPrice =
                    Math.floor((auction.currentPrice - increment) * Math.pow(10, 2)) / Math.pow(10, 2)
                await auction.save()

                if (auction.currentPrice < auction.reservePrice) {
                    auction.finished = true
                    await auction.save()
                }
            })
        }
    } catch (err) {
        console.log(err)
    }
}, interval)

setInterval(async () => {
    try {
        const trendUpAuctions = await AuctionModel.find({ finished: false, type: 'TREND_UP' })
        if (!trendUpAuctions) console.log('No active trend up auctions')
        else {
            trendUpAuctions.forEach(async auction => {
                const endDate = new Date(auction.createdAt.setDate(auction.createdAt.getDate() + 7))
                if (new Date() > endDate) {
                    auction.finished = true
                    auction.save()
                }
            })
        }
    } catch (err) {
        console.log(err)
    }
}, 1000)

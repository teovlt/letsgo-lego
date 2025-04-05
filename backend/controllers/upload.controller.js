const UserModel = require('../models/user.model')
const AuctionModel = require('../models/auction.model')
const { uploadErrors } = require('../utils/errors.utils')
const ObjectId = require('mongoose').Types.ObjectId

module.exports.uploadProfil = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send('ID unknown : ' + req.params.id)

    if (!req.files) return res.send({ status: false, message: 'No file uploaded ' })
    let file = req.files.file
    let fileName

    try {
        if (file.mimetype != 'image/png' && file.mimetype != 'image/jpg' && file.mimetype != 'image/jpeg') {
            throw Error('invalid file')
        }
        if (file.size > 10000000) {
            throw Error('maxSize')
        }
        fileName = req.params.id + '.jpg'
        file.mv(`${__dirname}${process.env.UPLOAD_PATH}profil/${fileName}`)
    } catch (err) {
        const errors = uploadErrors(err)
        return res.status(500).send(errors)
    }

    try {
        UserModel.findByIdAndUpdate(
            req.params.id,
            { $set: { picture: `./uploads/profil/${fileName}` } },
            { new: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) return res.send(`Successfully updated`)
                else return res.status(400).send({ message: err })
            }
        )
    } catch (err) {
        return res.status(500).send({ message: err })
    }
}

module.exports.uploadTempAuction = async (req, res) => {
    if (!req.files) return res.send({ status: false, message: 'No file uploaded ' })
    let file = req.files.file
    let fileName

    try {
        if (file.mimetype != 'image/png' && file.mimetype != 'image/jpg' && file.mimetype != 'image/jpeg') {
            throw Error('invalid file')
        }
        if (file.size > 3000000) {
            throw Error('maxSize')
        }
        fileName = 'temp.' + req.body.userId + '.jpg'
        file.mv(`${__dirname}${process.env.UPLOAD_PATH}auction/${fileName}`)
        return res.status(200).json({ status: true, image: `./uploads/auction/${fileName}` })
    } catch (err) {
        const errors = uploadErrors(err)
        return res.status(500).send(errors)
    }
}

module.exports.uploadAuctions = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send('ID unknown : ' + req.params.id)

    if (!req.files) return res.send({ status: false, message: 'No file uploaded ' })
    let file = req.files.file
    let fileName

    try {
        if (file.mimetype != 'image/png' && file.mimetype != 'image/jpg' && file.mimetype != 'image/jpeg') {
            throw Error('invalid file')
        }
        if (file.size > 3000000) {
            throw Error('maxSize')
        }
        fileName = req.params.id + '.jpg'
        file.mv(`${__dirname}${process.env.UPLOAD_PATH}auction/${fileName}`)
    } catch (err) {
        const errors = uploadErrors(err)
        return res.status(500).send(errors)
    }

    try {
        AuctionModel.findByIdAndUpdate(
            req.params.id,
            { $set: { picture: `./uploads/auction/${fileName}` } },
            { new: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) return res.send(docs)
                else return res.status(400).send({ message: err })
            }
        )
    } catch (err) {
        return res.status(500).send({ message: err })
    }
}

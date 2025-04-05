const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const auctionSchema = new mongoose.Schema(
    {
        sellerId: {
            type: ObjectId,
        },
        name: {
            type: String,
            maxlength: 50,
            required: true,
        },
        description: {
            type: String,
            maxlength: 300,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        finished: {
            type: Boolean,
            default: false,
        },
        picture: {
            type: String,
            default: 'uploads/auction/default.jpg',
        },
        startPrice: {
            type: Number,
            required: true,
            min: 0,
        },
        reservePrice: {
            type: Number,
            min: 0,
        },
        currentPrice: {
            type: Number,
        },
        bids: {
            type: [
                {
                    biderId: {
                        type: ObjectId,
                        required: true,
                    },
                    bid: {
                        type: Number,
                        required: true,
                    },
                    timestamps: {
                        type: String,
                    },
                },
            ],
        },
        // // commentaires faq (pas implémenté)
        // comments: {
        //     type: [
        //         {
        //             commentatorId: {
        //                 type: ObjectId,
        //                 required: true,
        //             },
        //             value: {
        //                 type: String,
        //                 maxlength: 250,
        //             },
        //             comments: {
        //                 type: [
        //                     {
        //                         commentatorId: {
        //                             type: ObjectId,
        //                             required: true,
        //                         },
        //                         value: {
        //                             type: String,
        //                             maxlength: 250,
        //                         },
        //                         timestamps: {
        //                             type: String,
        //                         },
        //                     },
        //                 ],
        //             },
        //             timestamps: {
        //                 type: String,
        //             },
        //         },
        //     ],
        // },
    },
    { timestamps: true }
)

const Auction = mongoose.model('Auction', auctionSchema)
module.exports = Auction

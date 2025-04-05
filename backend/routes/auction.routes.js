const Router = require('express').Router()
const AuctionController = require('../controllers/auction.controller')
const UploadController = require('../controllers/upload.controller')

Router.get('/', AuctionController.listAuctions)
Router.get('/:id', AuctionController.auctionInfo)
Router.post('/post', AuctionController.createAuction)
Router.delete('/:id', AuctionController.deleteAuction)
Router.put('/:id/bid', AuctionController.placeABid)

// upload
Router.post('/upload/temp', UploadController.uploadTempAuction)
Router.post('/:id/upload', UploadController.uploadAuctions)

module.exports = Router

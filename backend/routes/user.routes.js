const Router = require('express').Router()
const userController = require('../controllers/user.controller')
const authController = require('../controllers/auth.controller')
const uploadController = require('../controllers/upload.controller')

// auth
Router.post('/register', authController.signUp)
Router.post('/login', authController.signIn)
Router.get('/logout', authController.logout)

// user
Router.get('/', userController.listUsers)
Router.get('/:id', userController.userInfo)
Router.put('/:id', userController.updateUser)
Router.delete('/:id', userController.deleteUser)
Router.patch('/:id/fav', userController.addToFavourites)
Router.patch('/:id/unfav', userController.removeFromFavourites)

// upload
Router.post('/:id/upload', uploadController.uploadProfil)

module.exports = Router

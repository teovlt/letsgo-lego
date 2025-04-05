const chai = require('chai')
const Auctions = require('../models/auction.model')
const expect = chai.expect
const should = chai.should
const jwt = require('jsonwebtoken')
const chaiHttp = require('chai-http')
const server = require('../server')
const request = require('supertest')
const sinon = require('sinon')

const authController = require('../controllers/auth.controller')
const UserModel = require('../models/user.model')
const AuctionModel = require('../models/auction.model')
const errorsUtils = require('../utils/errors.utils')
const authMiddleware = require('../middleware/auth.middleware')

chai.use(chaiHttp)

describe('Auth controller', () => {
    describe('createToken tests', () => {
        const id = '12345'
        const token = authController.createToken(id)

        it('should create a valid token', () => {
            const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
            expect(decoded).to.have.property('id').to.equal(id)
        })

        it('should create a token with an expiration', () => {
            const decoded = jwt.decode(token, { complete: true })
            expect(decoded.payload).to.have.property('exp').to.not.be.null
        })

        it('should create a token with an issued time', () => {
            const decoded = jwt.decode(token, { complete: true })
            expect(decoded.payload).to.have.property('iat').to.not.be.null
        })
    })
    describe('signUp & signIn tests', () => {
        let testUserId
        beforeEach(async () => {
            const testUser = new UserModel({
                username: 'testuser11',
                name: 'test11',
                surname: 'user11',
                email: 'testuser11@gmail.com',
                password: 'testpassword',
                birthDate: '2000-01-01',
                bio: 'test bio',
            })
            const savedTestUser = await testUser.save()
            testUserId = savedTestUser
        })

        afterEach(async () => {
            await UserModel.deleteOne({ _id: testUserId })
        })

        describe('signUp tests', () => {
            it('should return an error if email is already registered', async () => {
                const res = await request(server).post('/api/user/register').send({
                    username: 'testuser23',
                    name: 'test11',
                    surname: 'user11',
                    email: 'testuser11@gmail.com',
                    password: 'password',
                    birthDate: '2000-01-01',
                })

                expect(res.statusCode).to.equal(500)
                expect(res.body).to.have.property('errors')
                expect(res.body.errors).to.have.property('email', '')
            })
        })

        describe('signIn tests', () => {
            it('should return errors if sign in fails', async () => {
                // Tenter de se connecter avec un mauvais mot de passe
                const res = await request(server)
                    .post('/api/user/login')
                    .send({ email: testUserId.email, password: 'wrong_password' })
                // Vérifier que la réponse est correcte
                expect(res.statusCode).to.equal(200)
                expect(res.body).to.have.property('errors')
                expect(res.body.errors).to.have.property('password', 'Le mot de passe ne correspond pas')

                // Tenter de se connecter avec un email non enregistré
                const res2 = await request(server)
                    .post('/api/user/login')
                    .send({ email: 'wrong_email@example.com', password: 'password' })

                // Vérifier que la réponse est correcte
                expect(res2.statusCode).to.equal(200)
                expect(res2.body).to.have.property('errors')
                expect(res2.body.errors).to.have.property('email', 'Email inconnu')
            })
        })
    })
})

describe('Errors Utils', () => {
    describe('signUpErrors', () => {
        it('should return an error for invalid username', () => {
            const err = { message: 'Validation failed: pseudo: Path `pseudo` is invalid (`invalid`).' }
            const result = errorsUtils.signUpErrors(err)
            expect(result).to.deep.equal({
                pseudo: 'Pseudo incorrect',
                username: '',
                name: '',
                surname: '',
                email: '',
                password: '',
            })
        })

        it('should return an error for invalid email', () => {
            const err = { message: 'Validation failed: email: Path `email` is invalid (`invalid`).' }
            const result = errorsUtils.signUpErrors(err)
            expect(result).to.deep.equal({
                username: '',
                name: '',
                surname: '',
                email: 'Email incorrect',
                password: '',
            })
        })

        it('should return an error for invalid password', () => {
            const err = {
                message:
                    'Validation failed: password: Path `password` (`short`) is shorter than the minimum allowed length (6).',
            }
            const result = errorsUtils.signUpErrors(err)
            expect(result).to.deep.equal({
                username: '',
                name: '',
                surname: '',
                email: '',
                password: 'Le mot de passe doit faire 6 caractères minimum',
            })
        })

        it('should return an error for a pseudo already taken', () => {
            const err = {
                message: 'E11000 duplicate key error collection: test.users index: pseudo dup key: { : "test" }',
                code: 11000,
                keyValue: { pseudo: 'test' },
            }
            const result = errorsUtils.signUpErrors(err)
            expect(result).to.have.property('pseudo', 'Ce pseudo est déjà pris')
        })

        it('should return an error for a email already taken', () => {
            const err = {
                message:
                    'E11000 duplicate key error collection: test.users index: email_1 dup key: { : "test@example.com" }',
                code: 11000,
                keyValue: { email: 'test@example.com' },
            }
            const result = errorsUtils.signUpErrors(err)
            expect(result).to.have.property('email', 'Cet email est déjà enregistré')
        })
    })
    describe('signInErrors', () => {
        it('should return an error for an unknown email', () => {
            const err = { message: 'Validation failed: email: Path `email` is unknown.' }
            const result = errorsUtils.signInErrors(err)
            expect(result).to.deep.equal({
                email: 'Email inconnu',
                password: '',
            })
        })
        it('should return an error for invalid password', () => {
            const err = { message: 'Validation failed: password: Path `password` does not match .' }
            const result = errorsUtils.signInErrors(err)
            expect(result).to.deep.equal({
                email: '',
                password: 'Le mot de passe ne correspond pas',
            })
        })
    })
    describe('uploadErrors', () => {
        it('should return an error for an invalid file', () => {
            const err = { message: 'invalid file' }
            const result = errorsUtils.uploadErrors(err)
            expect(result).to.deep.equal({
                format: 'Format incompatible',
                maxSize: '',
            })
        })
        it('should return an error for a too large file', () => {
            const err = { message: 'maxSize' }
            const result = errorsUtils.uploadErrors(err)
            expect(result).to.deep.equal({
                format: '',
                maxSize: 'Le fichier dépasse 10mo',
            })
        })
    })
    describe('createAuctionErrors', () => {
        it('should return an error if the starting price is less than zero', () => {
            const err = { message: 'startPrice' }
            const result = errorsUtils.createAuctionErrors(err)
            expect(result).to.deep.equal({
                startPrice: 'Le prix de départ est inférieur à zéro',
            })
        })
        it('should return an empty object if no error is passed', () => {
            const err = { message: '' }
            const result = errorsUtils.createAuctionErrors(err)
            expect(result).to.deep.equal({
                startPrice: '',
            })
        })
    })
})

describe('User controller', () => {
    let testUserId
    let testFavouriteId
    beforeEach(async () => {
        const testUser = new UserModel({
            username: 'testuser50',
            name: 'test50',
            surname: 'user50',
            email: 'testuser50@gmail.com',
            password: 'testpassword',
            birthDate: '2000-01-01',
            bio: 'test bio',
        })
        const savedTestUser = await testUser.save()
        testUserId = savedTestUser._id

        const testFavourite = new UserModel({
            username: 'testfavourite1',
            name: 'test1',
            surname: 'favourite1',
            email: 'testfavourite1@gmail.com',
            password: 'testpassword',
            birthDate: '2000-01-01',
            bio: 'test bio',
        })
        const savedTestFavourite = await testFavourite.save()
        testFavouriteId = savedTestFavourite._id
    })

    afterEach(async () => {
        await UserModel.deleteOne({ _id: testUserId })
        await UserModel.deleteOne({ _id: testFavouriteId })
    })

    describe('listUsers tests', () => {
        it('should list all users', async () => {
            const res = await request(server).get('/api/user')
            expect(res.statusCode).to.equal(200)
            expect(res.body).to.be.an('array')
        })
    })

    describe('userInfo tests', () => {
        it('should get user info', async () => {
            const res = await request(server).get(`/api/user/${testUserId}`)
            expect(res.statusCode).to.equal(200)
            expect(res.body).to.have.property('_id').to.equal(testUserId.toString())
            expect(res.body).to.not.have.property('password')
        })
        it('should return 400 if invalid id is passed', async () => {
            const invalidId = 'InvalidId'
            const res = await request(server).get(`/api/user/${invalidId}`)
            expect(res.statusCode).to.equal(400)
            expect(res.text).to.equal(`Invalid ID : ${invalidId}`)
        })
    })

    describe('updateUser tests', () => {
        it('should update user info', async () => {
            const updatedBio = 'updated test bio'
            const res = await request(server).put(`/api/user/${testUserId}`).send({ bio: updatedBio })
            expect(res.statusCode).to.equal(200)
            expect(res.body).to.have.property('_id').to.equal(testUserId.toString())
            expect(res.body).to.have.property('bio').to.equal(updatedBio)
        })
        it('should return 400 if invalid id is passed', async () => {
            const invalidId = 'InvalidId'
            const res = await request(server).put(`/api/user/${invalidId}`)
            expect(res.statusCode).to.equal(400)
            expect(res.text).to.equal(`Invalid ID : ${invalidId}`)
        })
        it('should return error if server error occurs', async () => {
            UserModel.findOneAndUpdate = sinon.stub().throws(new Error(''))
            const res = await request(server).put(`/api/user/${testUserId}`).send({ bio: 'updated bio' })
            expect(res.statusCode).to.equal(500)
            UserModel.findOneAndUpdate = sinon.stub().restore
        })
    })

    describe('deleteUser tests', () => {
        it('should delete a user', async () => {
            const res = await request(server).delete(`/api/user/${testUserId}`).set('Accept', 'application/json')
            expect(res.statusCode).to.equal(202)
            expect(res.body).to.have.property('message').to.equal('Successfully deleted')
        })
        it('should return 400 if invalid id is passed', async () => {
            const invalidId = 'InvalidId'
            const res = await request(server).delete(`/api/user/${invalidId}`)
            expect(res.statusCode).to.equal(400)
            expect(res.text).to.equal(`Invalid ID : ${invalidId}`)
        })
        it('should return error if server error occurs', async () => {
            UserModel.findOneAndDelete = sinon.stub().throws(new Error(''))
            const res = await request(server).delete(`/api/user/${testUserId}`)
            expect(res.statusCode).to.equal(500)
            UserModel.findOneAndDelete = sinon.stub().restore
        })
    })

    describe('addToFavourites tests', () => {
        it('should not add a favourite if the user ID is the same as the favourite ID', async () => {
            const res = await request(server).patch(`/api/user/${testUserId}/fav`).send({ idToAdd: testUserId })

            expect(res.statusCode).to.equal(400)
            expect(res.text).to.equal(`Same ID : ${testUserId}`)
        })

        it('should not add a favourite if the user ID is invalid', async () => {
            const invalidId = 'InvalidId'
            const res = await request(server).patch(`/api/user/${invalidId}/fav`).send({ idToAdd: testUserId })

            expect(res.statusCode).to.equal(400)
            expect(res.text).to.equal(`Invalid ID : ${invalidId}`)
        })

        it('should return error if server error occurs', async () => {
            UserModel.findOneAndUpdate = sinon.stub().throws(new Error(''))
            const res = await request(server)
                .patch(`/api/user/${testUserId}/fav`)
                .send({ idToAdd: '5f1a34f05c8a8a6a7c6b1f6a' })
            expect(res.statusCode).to.equal(500)
            UserModel.findOneAndUpdate = sinon.stub().restore
        })
    })
    describe('removeFromFavourites tests', () => {
        it('should not remove a favourite if the user ID is the same as the favourite ID', async () => {
            const res = await request(server).patch(`/api/user/${testUserId}/unfav`).send({ idToRemove: testUserId })

            expect(res.statusCode).to.equal(400)
            expect(res.text).to.equal(`Same ID : ${testUserId}`)
        })

        it('should not remove a favourite if the user ID is invalid', async () => {
            const invalidId = 'InvalidId'
            const res = await request(server).patch(`/api/user/${invalidId}/unfav`).send({ idToRemove: testUserId })

            expect(res.statusCode).to.equal(400)
            expect(res.text).to.equal(`Invalid ID : ${invalidId}`)
        })

        it('should return error if server error occurs', async () => {
            UserModel.findOneAndUpdate = sinon.stub().throws(new Error(''))
            const res = await request(server)
                .patch(`/api/user/${testUserId}/unfav`)
                .send({ idToRemove: testFavouriteId })
            expect(res.statusCode).to.equal(500)
            UserModel.findOneAndUpdate = sinon.stub().restore
        })
    })
})

describe('Auth controller', () => {
    let testUserId
    let testAuctionId
    beforeEach(async () => {
        const testUser = new UserModel({
            username: 'testuser100',
            name: 'test100',
            surname: 'user100',
            email: 'testuser100@gmail.com',
            password: 'testpassword',
            birthDate: '2000-01-01',
            bio: 'test bio',
        })
        const savedTestUser = await testUser.save()
        testUserId = savedTestUser._id

        const testAuction = new AuctionModel({
            sellerId: testUserId,
            name: 'test auction',
            description: 'test description',
            type: 'TREND_UP',
            category: 'test category',
            startPrice: 100,
        })
        const savedTestAuction = await testAuction.save()
        testAuctionId = savedTestAuction._id
    })

    afterEach(async () => {
        await UserModel.deleteOne({ _id: testUserId })
        await AuctionModel.deleteOne({ _id: testAuctionId })
    })

    describe('listAuctions tests', () => {
        it('should return a list of auctions', async () => {
            const res = await request(server).get('/api/auction')
            expect(res.status).to.be.equal(200)
            expect(res.body).to.be.an('array')
        })
    })

    describe('auctionInfo tests', () => {
        it('should return a 400 error if the auction ID is invalid', async () => {
            const invalidId = 'InvalidId'
            const res = await request(server).get(`/api/auction/${invalidId}`)
            expect(res.status).to.be.equal(400)
            expect(res.text).to.equal(`Invalid ID : ${invalidId}`)
        })
        it('should return the auction information if the auction ID is valid', async () => {
            const res = await request(server).get(`/api/auction/${testAuctionId}`)
            expect(res.statusCode).to.equal(200)
            expect(res.body).to.have.property('_id').to.equal(testAuctionId.toString())
        })
    })

    describe('createAuction tests', () => {
        it('should create a new auction', async () => {
            const res = await request(server).post(`/api/auction/post`).send({
                sellerId: testUserId,
                name: 'rare lego',
                description: 'the best lego',
                type: 'TREND_UP',
                category: 'collection',
                startPrice: 100,
            })
            expect(res.statusCode).to.equal(201)

            expect(res.body).to.be.an('object')
            expect(res.body).to.have.property('_id').to.equal(res.body._id)
            expect(res.body).to.have.property('name').to.equal('rare lego')
            expect(res.body).to.have.property('description').to.equal('the best lego')
            expect(res.body).to.have.property('type').to.equal('TREND_UP')
            expect(res.body).to.have.property('category').to.equal('collection')
            expect(res.body).to.have.property('startPrice').to.equal(100)
            await AuctionModel.deleteOne({ _id: res.body._id })
        })
        it('should return a status 500 and errors when failing to create an auction', async () => {
            const res = await request(server).post(`/api/auction/post`).send({
                sellerId: testUserId,
                name: 'rare lego',
                description: 'the best lego',
                type: 'TREND_UP',
                category: 'collection',
                startPrice: -5,
            })
            expect(res.statusCode).to.equal(500)
            expect(res.body).to.have.property('startPrice').to.equal('Le prix de départ est inférieur à zéro')
        })
    })

    describe('deleteAuction tests', () => {
        it('should delete a auction', async () => {
            const res = await request(server).delete(`/api/auction/${testAuctionId}`).set('Accept', 'application/json')
            expect(res.statusCode).to.equal(202)
            expect(res.body).to.have.property('message').to.equal('Successfully deleted')
        })
        it('should return 400 if invalid id is passed', async () => {
            const invalidId = 'InvalidId'
            const res = await request(server).delete(`/api/auction/${invalidId}`)
            expect(res.statusCode).to.equal(400)
            expect(res.text).to.equal(`Invalid ID : ${invalidId}`)
        })
        it('should return error if server error occurs', async () => {
            AuctionModel.findOneAndDelete = sinon.stub().throws(new Error(''))
            const res = await request(server).delete(`/api/auction/${testAuctionId}`)
            expect(res.statusCode).to.equal(500)
            AuctionModel.findOneAndDelete = sinon.stub().restore
        })
    })

    describe('placeABid tests', () => {
        it('should return a status 400 if invalid id is passed', async () => {
            const invalidId = 'InvalidId'
            const res = await request(server).put(`/api/auction/${invalidId}/bid`)
            expect(res.statusCode).to.equal(400)
            expect(res.text).to.equal(`Invalid ID : ${invalidId}`)
        })

        it('should return a status 201 if type is TREND_UP', async () => {
            const res = await request(server)
                .put(`/api/auction/${testAuctionId}/bid`)
                .send({ biderId: testUserId, bid: 150 })
            expect(res.statusCode).to.equal(201)
        })

        it('should return a status 201 if type is TREND_DOWN', async () => {
            let testAuctionDOWNId
            const testAuctionDOWN = new AuctionModel({
                sellerId: testUserId,
                name: 'test auctionDOWN',
                description: 'test description',
                type: 'TREND_DOWN',
                category: 'test category',
                startPrice: 100,
                reservePrice: 0,
            })
            const savedTestAuctionDOWN = await testAuctionDOWN.save()
            testAuctionDOWNId = savedTestAuctionDOWN._id

            const res = await request(server)
                .put(`/api/auction/${testAuctionDOWNId}/bid`)
                .send({ biderId: testUserId, bid: 150 })

            expect(res.statusCode).to.equal(201)
            await AuctionModel.deleteOne({ _id: testAuctionDOWNId })
        })
        it('should return a status 400 if the auction is finished', async () => {
            let testAuctionFinishedId
            const testAuctionFinished = new AuctionModel({
                sellerId: testUserId,
                name: 'test auctionFinished',
                description: 'test description',
                type: 'TREND_UP',
                finished: true,
                category: 'test category',
                startPrice: 100,
            })
            const savedTestAuctionFinished = await testAuctionFinished.save()
            testAuctionFinishedId = savedTestAuctionFinished._id

            const res = await request(server)
                .put(`/api/auction/${testAuctionFinishedId}/bid`)
                .send({ biderId: testUserId, bid: 150 })

            expect(res.statusCode).to.equal(400)
            await AuctionModel.deleteOne({ _id: testAuctionFinishedId })
        })
        it('should return a status 400 if bid <= currentPrice', async () => {
            let testAuctionDOWNId
            const testAuctionDOWN = new AuctionModel({
                sellerId: testUserId,
                name: 'test auctionDOWN',
                description: 'test description',
                type: 'TREND_UP',
                category: 'test category',
                startPrice: 100,
                currentPrice: 150,
            })
            const savedTestAuctionDOWN = await testAuctionDOWN.save()
            testAuctionDOWNId = savedTestAuctionDOWN._id

            const res = await request(server)
                .put(`/api/auction/${testAuctionDOWNId}/bid`)
                .send({ biderId: testUserId, bid: 120 })

            expect(res.statusCode).to.equal(400)
            await AuctionModel.deleteOne({ _id: testAuctionDOWNId })
        })
        it('should return a status 400 if bid < reservePrice', async () => {
            let testAuctionDOWNId
            const testAuctionDOWN = new AuctionModel({
                sellerId: testUserId,
                name: 'test auctionDOWN',
                description: 'test description',
                type: 'TREND_DOWN',
                category: 'test category',
                startPrice: 100,
                reservePrice: 50,
            })
            const savedTestAuctionDOWN = await testAuctionDOWN.save()
            testAuctionDOWNId = savedTestAuctionDOWN._id

            const res = await request(server)
                .put(`/api/auction/${testAuctionDOWNId}/bid`)
                .send({ biderId: testUserId, bid: 2 })

            expect(res.statusCode).to.equal(400)
            await AuctionModel.deleteOne({ _id: testAuctionDOWNId })
        })
        it('should return a status 400 if the type is unknown', async () => {
            let testAuctionUnknownId
            const testAuctionUnknown = new AuctionModel({
                sellerId: testUserId,
                name: 'test auctionUNKNOWN',
                description: 'test description',
                type: 'UNKNOWN',
                category: 'test category',
                startPrice: 100,
            })
            const savedTestAuctionUnknown = await testAuctionUnknown.save()
            testAuctionUnknownId = savedTestAuctionUnknown._id

            const res = await request(server)
                .put(`/api/auction/${testAuctionUnknownId}/bid`)
                .send({ biderId: testUserId, bid: 50 })

            expect(res.statusCode).to.equal(400)
            await AuctionModel.deleteOne({ _id: testAuctionUnknownId })
        })
    })
})

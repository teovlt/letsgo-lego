const ObjectId = require('mongoose').Types.ObjectId
const UserModel = require('../models/user.model')

module.exports.listUsers = async (req, res) => {
    const users = await UserModel.find().select('-password')
    res.status(200).json(users)
}

module.exports.userInfo = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send(`Invalid ID : ${req.params.id}`)

    const user = await UserModel.findOne({ _id: req.params.id }).select('-password')
    return res.status(200).json(user)
}

module.exports.updateUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send(`Invalid ID : ${req.params.id}`)

    try {
        const docs = await UserModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    bio: req.body.bio,
                },
            },
            { new: true, setDefaultsOnInsert: true }
        )
        return res.status(200).json(docs)
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}

module.exports.deleteUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send(`Invalid ID : ${req.params.id}`)

    try {
        await UserModel.findOneAndDelete({ _id: req.params.id })
        return res.status(202).json({ message: 'Successfully deleted' })
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}

module.exports.addToFavourites = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send(`Invalid ID : ${req.params.id}`)

    if (req.params.id === req.body.idToAdd) return res.status(400).send(`Same ID : ${req.params.id}`)

    try {
        await UserModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $addToSet: { favourites: req.body.idToAdd },
            },
            { new: true, setDefaultsOnInsert: true }
        )
        return res.status(200).json({ message: 'Successfully followed' })
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}

module.exports.removeFromFavourites = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).send(`Invalid ID : ${req.params.id}`)

    if (req.params.id === req.body.idToRemove) return res.status(400).send(`Same ID : ${req.params.id}`)

    try {
        await UserModel.findOneAndUpdate(
            { _id: req.params.id },
            {
                $unset: { favourites: req.body.idToRemove },
            },
            { new: true, setDefaultsOnInsert: true }
        )
        return res.status(200).json({ message: 'Successfully unfollowed' })
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}

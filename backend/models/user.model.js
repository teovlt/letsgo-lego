const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const ObjectId = mongoose.Types.ObjectId

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 35,
            unique: true,
            trim: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        surname: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
        },
        birthDate: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            default: 'uploads/profil/default.jpg',
        },
        bio: {
            type: String,
            maxlength: 140,
            trim: true,
        },
        favourites: {
            type: [ObjectId],
        },
    },
    { timestamps: true }
)

userSchema.pre('save', async function (next) {
    const capitalize = str => {
        return str.substring(0, 1).toUpperCase() + str.substring(1, str.length).toLowerCase()
    }

    // Formatage nom, prénom, email
    this.email = this.email.toLowerCase()
    this.name = capitalize(this.name)
    this.surname = capitalize(this.surname)
    // Hashage du mot de passe
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) return user
        else throw Error('incorrect password')
    }
    throw Error('incorrect email')
}

const User = mongoose.model('User', userSchema)
module.exports = User

const mongoose = require('mongoose')

mongoose
    .set('strictQuery', true)
    .connect(process.env.DB_PATH, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => {
        console.log('Failed to connect to MongoDB', err)
    })

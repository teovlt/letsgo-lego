// Server Imports
const express = require('express')
const app = express()
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
require('dotenv').config({ path: 'config/.env' })
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
require('./config/db')
const fs = require('fs')

// Routes Imports
const userRoutes = require('./routes/user.routes')
const autionRoutes = require('./routes/auction.routes')

// Middlewares Imports
const { checkUser, requireAuth } = require('./middleware/auth.middleware')

// App config
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    allowedHeaders: ['sessionId', 'Content-Type'],
    exposedHeaders: ['sessionId'],
    methods: 'GET, POST, PUT, PATCH, DELETE',
    preflightContinue: false,
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(fileUpload())

const options = {
    // key: fs.readFileSync('/etc/ssl/letsgo-lego.key'),
    // cert: fs.readFileSync('/etc/ssl/letsgo-lego.crt'),
}

const server = http.createServer(options, app)

// Socket config
const io = new Server(server, {
    cors: corsOptions,
})

io.on('connection', socket => {
    // console.log(`User connected: ${socket.id}`)

    socket.on('disconnect', () => {
        // console.log(`User disconnected: ${socket.id}`)
    })

    socket.on('updateUser', () => {
        socket.broadcast.emit('updateUsers')
    })

    socket.on('createAuction', () => {
        socket.broadcast.emit('updateAuctions')
    })

    socket.on('deleteAuction', () => {
        socket.broadcast.emit('updateAuctions')
    })

    socket.on('placeABid', id => {
        socket.broadcast.emit('updateAuction', id)
    })

    socket.on('winAuction', ({ id, username }) => {
        socket.broadcast.emit('winAuction', { id: id, username: username })
    })
})

// Routes
app.use('/api/user', userRoutes)
app.use('/api/auction', autionRoutes)

// Middlewares
app.use('*', checkUser)
app.use('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
})

// Server listening
server.listen(process.env.PORT, () => {
    console.log(`Server is now listening on port ${process.env.PORT}`)
})

module.exports = server

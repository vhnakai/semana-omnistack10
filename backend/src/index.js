const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const http = require('http')

const {setupWebsocket} = require('./websocket')

const app = express()
const server = http.Server(app)
setupWebsocket(server)

mongoose.connect('mongodb+srv://vhnakai:digimongo@cluster0-2z1ln.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)


// MongoDB (Não-relacional)
server.listen(3333)
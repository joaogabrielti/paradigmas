const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors());
server.use(express.json())

const ProjectRoutes = require('./routes/ProjectRoutes')
server.use('/project', ProjectRoutes)

server.listen(3002, () => {
    console.log('API Ativa')
})
const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 5000;

app.use(cors());


app.get('/', (req, res)=>{
    res.send(`welcome`);
})

server.listen(PORT, ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log(`server running`))
    .catch(err=> console.log(err))
})

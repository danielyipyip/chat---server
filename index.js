const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const chatRoute = require('./route/chatRoute');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/chat', chatRoute)


app.get('/', (req, res)=>{
    res.send(`welcome`);
})

io.on('connection', socket=>{
    console.log('socket connected')

    socket.on('message', (msg)=>{
        console.log(msg)
        socket.emit('messageFromServer', msg);
    })

    socket.on('disconnect', ()=>{
        console.log('disconnected')
    })
})

server.listen(PORT, ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log(`server running`))
    .catch(err=> console.log(err))
})

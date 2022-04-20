import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import mongoose from 'mongoose';
import cors  from 'cors'
import dotenv from 'dotenv';
dotenv.config();
import chatRoute from './route/chatRoute.js';

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

    socket.on('joinroom', (user, room)=>{
        console.log(room)
        socket.join(room)
        console.log(`${user} join ${room}`)
    })

    socket.on('message', (msg)=>{
        console.log(msg)
        socket.emit('messageFromServer', msg);
    })

    socket.on('chatMessage', (msg, room)=>{
        console.log(`${room}: ${msg}`)
        socket.to(room).emit('chatMessage', msg) //this exclude sender
        // io.in(room).emit('chatMessage', msg) this send to everyone (include sender)
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

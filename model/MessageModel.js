import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    sender: {type: String, required: true}, 
    message: {type: String, required: true}, 
    createDate: {type: Date, default: new Date()},
    room: {type: String, required: true} //in initial phase, input room num first
})

const messageModel = mongoose.model('message', messageSchema);

export default messageModel
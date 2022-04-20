import mongoose from 'mongoose';

//1 message
const messageSchema = mongoose.Schema({
    sender: {type: String, required: true}, 
    message: {type: String, required: true}, 
    createDate: {type: Date, default: new Date()},
    room: {type: String, required: true} //in initial phase, input room num first
})

export const Message = mongoose.model('Message', messageSchema);

//many messages = chat
const chatSchema = mongoose.Schema({
    name: String, 
    messages: {type: mongoose.Schema.Types.ObjectId, ref: 'Message'}
})

export const Chat = mongoose.model('Chat', chatSchema);

//user -> chat
const contactListSchema = mongoose.Schema({
    user: {type: String, required: true}, 
    chat: {type: mongoose.Schema.Types.ObjectId, ref: 'Chat'}
})

export const Contact = mongoose.model('Contact', contactListSchema)

// export default messageModel
const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    sender: {type: String, required: true}, 
    message: {type: String, required: true}, 
    createDate: {type: Date, default: new Date()}
})

const messageModel = mongoose.model('message', messageSchema);

export default messageModel
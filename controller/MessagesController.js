import mongoose from "mongoose";
import {Message} from '../model/MessageModel.js'

export const getMessages = async (req, res) =>{
    try{
        const messages = await Message.find();
        return res.status(200).json(messages);
    }catch(err){
        console.log(err);
        return res.json({message: err})
    }
}
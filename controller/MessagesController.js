import mongoose from "mongoose";
import MessageModel from '../model/MessageModel.js'

export const getMessages = async (req, res) =>{
    try{
        const messages = await MessageModel.find();
        return res.status(200).json(messages);
    }catch(err){
        console.log(err);
        return res.json({message: err})
    }
}
import mongoose from "mongoose";

export const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },
  
},{timestamps: true})

export const Message = mongoose.models?.Message || mongoose.model('Message',messageSchema);
'use server'
import { connectToDb } from "./connect";
import { Message } from "./models";

export const getMessages = async () =>{
    try{
        connectToDb(); // connect to db
        console.log('success')
        const messages = await Message.find(); // get all post
        return messages;
    }catch(error){
        console.log(error);
        throw new Error('something went wrong');
    }
}

export const storeMessage = async (formData) =>{
    const {name,email,message} = Object.fromEntries(formData);

    try{
        connectToDb(); // connect to db
        const newMessage = new Message({
            name,email,message
        });
        await newMessage.save(); // save post
        console.log('Message saved successfully');
    }catch(error){
        console.log(error);
        throw new Error('failed to store');
    }
}
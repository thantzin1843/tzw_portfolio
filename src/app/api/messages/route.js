import { connectToDb } from "@/utils/connect"
import { Message } from "@/utils/models";
import { NextResponse } from "next/server"


    export const GET = async () =>{
        await connectToDb();
        const messages = await Message.find();
        return NextResponse.json({messages});
    }

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { DB_NAME } from '../constant'

dotenv.config({
    path: './.env'
})


const connectDB = async() => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000
        })

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${(error as Error).message}`);
        process.exit(1); 
    }
}

export default connectDB
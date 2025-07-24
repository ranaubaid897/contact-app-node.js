import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); // Load variables from .env

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err));
};

export default connectDB;

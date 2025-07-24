import express from 'express';
import dotenv from 'dotenv';
dotenv.config(); // Load .env first

import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Connect to DB
connectDB();

// Routes
app.use('/', contactRoutes);

// Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

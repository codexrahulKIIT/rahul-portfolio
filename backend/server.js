// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Message = require('./models/Message');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Root test route
app.get('/', (req, res) => {
  res.send('🌐 Server is running');
});

// POST /api/contact - Save message to MongoDB
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log('📨 Contact Request Received:', req.body); // Debug log

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields (name, email, subject, message) are required',
    });
  }

  try {
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();
    res.status(201).json({
      success: true,
      message: '✅ Message saved successfully!',
    });
  } catch (error) {
    console.error('❌ Error saving message:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong while saving the message',
    });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on http://localhost:${PORT}`));

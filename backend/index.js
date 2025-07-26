const mongoose = require('mongoose');
const express = require('express');
const Message = require('./models/Message');
const app = express();

// Replace with your actual MongoDB connection string
mongoose.connect('mongodb://localhost:27017/rahulPortfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message received!' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
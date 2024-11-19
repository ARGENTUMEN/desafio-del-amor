const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(err));

// Routes
app.use('/api/cards', require('./routes/cards'));

// Export the app for Vercel
module.exports = app;

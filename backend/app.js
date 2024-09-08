const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const router = require('./routes/todoRoutes');
const cors = require('cors');

// create express server
const app = express();
// set the port
const port = process.env.PORT || 8000;

// Middleware to parse JSON bodies 
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// Connect to MongoDB database
mongoose.connect(process.env.ATLAS_URI);
const connection = mongoose.connection;
connection.once('open', ()  =>  {
  console.log('MongoDB database connection established successfully');
});

// Routes
app.use('/todo', router);

// start the server
app.listen(port, () => {
  console.log('server is running at http://localhost:${port}');
}); 
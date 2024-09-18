// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // For parsing JSON request bodies

// Database connection pool for better performance
const db = mysql.createPool({
  // host: process.env.DB_HOST,
  host: '130.162.54.212', 
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  connectionLimit: 10 // To handle multiple connections efficiently
});

// Test the database connection
db.getConnection((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Route to handle POST request for /cont
app.post('/cont', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Basic validation of request body
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).send('All fields are required.');
  }

  // SQL query to insert data
  const query = 'INSERT INTO data (firstName, lastName, email, phone, message) VALUES (?, ?, ?, ?, ?)';
  
  db.query(query, [firstName, lastName, email, phone, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Error registering user.');
    }

    // Send success response
    res.status(200).send('User registered successfully!');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

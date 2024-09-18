const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME, 
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

// Endpoint to register a user
app.post('/cont', (req, res) => {
  const { firstName,lastName,email,phone, message } = req.body;
  const query = 'INSERT INTO data (firstName, lastName, email, phone, message) VALUES (?, ?, ?, ?, ?)';

  db.query(query, [firstName,lastName,email,phone, message ], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send('User registered successfully!');
  });
});



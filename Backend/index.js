// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors({ origin: '*' }));

// app.use(cors());
app.use(express.json());

// Set up MySQL connection
const urldb = process.env.MYSQL_URL;  
const db = mysql.createConnection(urldb);


// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

// Handle MySQL connection errors
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    process.exit(1);  // Exit if there's a connection error
  }
  console.log('Connected to MySQL');
});




// Insert data route
app.post('/data', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).send('All fields are required.');
  }

  const query = `INSERT INTO data (firstName, lastName, email, phone, message) VALUES (?, ?, ?, ?, ?)`;

  db.query(query, [firstName, lastName, email, phone, message], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err.stack);
      return res.status(500).send('Error inserting data.');
    }
    res.status(200).send('Data inserted successfully!');
  });
  res.setHeader('Content-Type', 'text/plain');  
  res.end('Hello, World!\n');
});

// Start the server and listen on port 3306
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle process termination
process.on('SIGINT', () => {
  db.end((err) => {
    if (err) {
      console.error('Error closing MySQL connection:', err.stack);
    }
    console.log('MySQL connection closed.');
    process.exit(0);
  });
});

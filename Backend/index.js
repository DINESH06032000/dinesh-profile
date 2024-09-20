// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();


app.use(cors());
app.use(express.json()); 

const urldb=`mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}`
const db = mysql.createConnection(urldb);


app.post('/cont', (req, res) => {
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
});


const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

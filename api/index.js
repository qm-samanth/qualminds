const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Update these values with your actual MySQL credentials
const db = mysql.createConnection({
  host: 'YOUR_MYSQL_HOST',
  port: 3306, // or your port
  user: 'YOUR_MYSQL_USER',
  password: 'YOUR_MYSQL_PASSWORD',
  database: 'YOUR_DATABASE_NAME',
  // Uncomment and update the following if you use SSL
  // ssl: {
  //   ca: fs.readFileSync(__dirname + '/public/ca.pem'),
  //   rejectUnauthorized: false
  // }
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});

app.post('/api/contact', (req, res) => {
  console.log('Received POST /api/contact');
  console.log('Request body:', req.body);
  const { name, email, phone, company, service, message } = req.body;
  const sql = 'INSERT INTO contact_submissions (name, email, phone, company, service, message) VALUES (?, ?, ?, ?, ?, ?)';
  console.log('SQL:', sql);
  console.log('Values:', [name, email, phone, company, service, message]);
  db.query(sql, [name, email, phone, company, service, message], (err, result) => {
    if (err) {
      console.error('SQL Error:', err);
      return res.status(500).json({ error: 'Database error', details: err.message, code: err.code, sqlMessage: err.sqlMessage });
    }
    console.log('Insert result:', result);
    res.json({ success: true });
  });
});

const PORT = process.env.PORT || 24714;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));

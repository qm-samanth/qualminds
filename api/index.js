

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());



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

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Submit a contact form
 *     description: Save a contact form submission to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               company:
 *                 type: string
 *               service:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *       500:
 *         description: Database error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: string
 *                 code:
 *                   type: string
 *                 sqlMessage:
 *                   type: string
 */

// Only one /api/contact endpoint, using db connection
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

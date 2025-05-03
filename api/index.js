const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'QualMinds API',
      version: '1.0.0',
      description: 'API documentation for QualMinds contact form',
    },
    servers: [
      {
        url: process.env.API_BASE_URL || '',
        description: process.env.API_BASE_URL ? 'Hosted server' : 'Local server',
      },
    ],
  },
  apis: [__filename], // Path to the API docs (works for local and hosted)
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {explorer: true}));
// Redirect /api/docs/ to /api/docs for easier access (trailing slash issue on some hosts)
app.get('/api/docs/', (req, res) => res.redirect('/api/docs'));

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

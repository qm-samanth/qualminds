# Contact API

This is a simple Node.js + Express API for saving contact form leads to a remote MySQL database.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Update your MySQL credentials in `index.js`:
   ```js
   const db = mysql.createConnection({
     host: 'YOUR_MYSQL_HOST',
     user: 'YOUR_MYSQL_USER',
     password: 'YOUR_MYSQL_PASSWORD',
     database: 'YOUR_MYSQL_DATABASE',
   });
   ```
3. Create the table in your MySQL database:
   ```sql
   CREATE TABLE contact_submissions (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255),
     email VARCHAR(255),
     phone VARCHAR(50),
     company VARCHAR(255),
     service VARCHAR(255),
     message TEXT,
     submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```
4. Start the server:
   ```sh
   node index.js
   ```

## API Endpoint

- `POST /api/contact`
  - Body: JSON with `name`, `email`, `phone`, `company`, `service`, `message`
  - Example:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "company": "Acme Inc.",
      "service": "Custom Software",
      "message": "I am interested in your services."
    }
    ```

## Notes
- CORS is enabled for frontend integration.
- Update credentials before running in production.

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.DB_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.DB_PORT,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      message: 'Backend connected to PostgreSQL!',
      time: result.rows[0]
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Backend running on port ${process.env.BACKEND_PORT}`);
});

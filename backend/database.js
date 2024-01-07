// database.js

const mysql = require("mysql2/promise");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "Diganta@7908",
  database: "expense_tracker",
};

const pool = mysql.createPool(dbConfig);

// Promisify the pool query
const query = async (sql, values) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query(sql, values);
    return rows;
  } finally {
    connection.release();
  }
};

module.exports = {
  query,
};

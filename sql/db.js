const Database = require('better-sqlite3');
const db = new Database('prueba.db');

module.exports = db;
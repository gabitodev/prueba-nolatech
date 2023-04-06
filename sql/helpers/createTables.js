const db = require('../db');

const createClientTable = async () => {
  db.prepare('DROP TABLE IF EXISTS client').run();
  db.prepare(`
    CREATE TABLE client (
      cliente_id TEXT PRIMARY KEY,
      nombres TEXT,
      email TEXT
    )
  `).run();
};

const createShopingCarTable = async () => {
  db.prepare('DROP TABLE IF EXISTS carrito').run();
  const prepare = db.prepare(`
    CREATE TABLE carrito (
      producto_id TEXT,
      cliente_id TEXT,
      cantidad NUMBER,
      FOREIGN KEY (cliente_id) REFERENCES client (cliente_id) ON DELETE CASCADE,
      FOREIGN KEY (producto_id) REFERENCES producto (producto_id) ON DELETE CASCADE 
    )
  `);

  prepare.run();
};

const createProductTable = async () => {
  db.prepare('DROP TABLE IF EXISTS producto').run();
  const prepare = db.prepare(`
    CREATE TABLE producto (
      producto_id TEXT PRIMARY KEY,
      nombre TEXT
    )
  `);

  prepare.run();
};

const createTables = async () => {
  console.log('creando tablas...');
  await createClientTable();
  await createProductTable();
  await createShopingCarTable();
  console.log('tablas creadas...');
}

module.exports = { createTables };
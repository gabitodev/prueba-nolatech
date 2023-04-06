const db = require('../db');
const crypto = require('crypto');

const createClient = async (name, email) => {
  const statement = db.prepare(`
    INSERT INTO client (cliente_id, nombres, email) VALUES (?, ?, ?)
  `);

  statement.run(crypto.randomUUID(), name, email);
};

const createProduct = async () => {
  const statement = db.prepare(`
    INSERT INTO producto (producto_id, nombre) VALUES (?, ?)
  `);

  statement.run(crypto.randomUUID(), 'Computadora');
};

const createShopingCar = async () => {
  const [client] = db.prepare('SELECT * FROM client').all();
  const [product] = db.prepare('SELECT * FROM producto').all();

  const statement = db.prepare(`
    INSERT INTO carrito (cliente_id, producto_id, cantidad) VALUES (?, ?, ?)
  `);

  statement.run(client.cliente_id, product.producto_id, 2);
}

module.exports = { createClient, createProduct, createShopingCar };
const { createTables } = require("../helpers/createTables");
const db = require('../db');
const { createClient, createProduct, createShopingCar } = require("../helpers/fillTables");

describe('sql', () => {
  beforeAll(async () => {
    await createTables();
    await createClient('user1', 'user1@gmail.com');
    await createClient('user2', 'user2@gmail.com');
    await createClient('user3', 'user3@gmail.com');
    await createProduct();
    await createShopingCar();
  });

  test('tarea1 y tarea3', () => {
    const [client] = db.prepare('SELECT * FROM client').all();
    const prepare = db.prepare(`
      SELECT client.cliente_id, client.nombres, producto.producto_id, producto.nombre, carrito.cantidad
      FROM carrito
      INNER JOIN client ON carrito.cliente_id = client.cliente_id
      LEFT JOIN producto
    `);

    const result = prepare.all();
    expect(result[0]).toMatchObject({
      cliente_id: result[0].cliente_id,
      nombres: 'user1',
      producto_id:  result[0].producto_id,
      nombre: 'Computadora',
      cantidad: 2
    });
  });

  test('tarea2', () => {
    const prepare = db.prepare(`
      SELECT client.cliente_id, client.nombres, producto.producto_id, producto.nombre, carrito.cantidad
      FROM carrito, client, producto
      WHERE carrito.cliente_id = client.cliente_id
    `);

    const result = prepare.all();
    expect(result[0]).toMatchObject({
      cliente_id: result[0].cliente_id,
      nombres: 'user1',
      producto_id:  result[0].producto_id,
      nombre: 'Computadora',
      cantidad: 2
    });
  });
});
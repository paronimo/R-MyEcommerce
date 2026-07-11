const express = require('express');
const router = express.Router();
const db = require('../db/database'); // Importamos el archivo de arriba

// GET /api/products -> Trae todos los ataúdes, parcelas y lápidas de SQLite
router.get('/api/products', (req, res) => {
  try {
    // Al hacer este SELECT, SQLite usa el esquema de tu schema.sql
    const products = db.prepare('SELECT * FROM products').all();
    res.json(products); // Se lo mandamos a React limpio como JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/products/new -> Guarda un producto con sus especificaciones de cementerio
router.post('/api/products/new', express.json(), (req, res) => {
  const { name, price, image, stock, description, service_type, location_sector, material } = req.body;
  
  try {
    const insert = db.prepare(`
      INSERT INTO products (name, price, image, stock, description, service_type, location_sector, material)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    const info = insert.run(name, price, image, stock, description, service_type, location_sector, material);
    res.json({ success: true, id: info.lastInsertRowid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
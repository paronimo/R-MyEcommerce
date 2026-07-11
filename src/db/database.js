// src/db/database.js
const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// 1. Creamos el archivo de la base de datos dentro de la carpeta db
const dbPath = path.join(__dirname, 'database.sqlite');
const db = new Database(dbPath);

// Optimización para SQLite
db.pragma('journal_mode = WAL');

// 2. Lee el archivo schema.sql que tenés en la misma carpeta
const schemaPath = path.join(__dirname, 'schema.sql');
const schema = fs.readFileSync(schemaPath, 'utf8');

// 3. Ejecuta el esquema. ¡Acá se conecta el schema con el servidor!
// Esto crea las tablas automáticamente al iniciar
db.exec(schema);

module.exports = db;
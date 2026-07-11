-- db/schema.sql

CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  image TEXT, -- Aquí guardaremos el nombre del archivo de la imagen (ej: "ataud-cedro.jpg")
  stock INTEGER NOT NULL DEFAULT 0,
  category_id INTEGER,
  description TEXT,
  
  -- ESPECIFICACIONES EXCLUSIVAS DEL TRABAJO FUNERARIO:
  service_type TEXT CHECK(service_type IN ('producto', 'parcela', 'mantenimiento')), 
  location_sector TEXT, -- Ej: "Sector Los Pinos", "Galería Norte Nicho 42"
  material TEXT,         -- Ej: "Madera de Cedro", "Mármol de Carrara", "Bronce"
  
  FOREIGN KEY(category_id) REFERENCES categories(id)
);

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  total REAL NOT NULL DEFAULT 0,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS order_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  price REAL NOT NULL,
  FOREIGN KEY(order_id) REFERENCES orders(id)
  -- Nota: En producción quitaríamos la clave foránea estricta a products si se eliminan ataúdes viejos, 
  -- pero para el entorno escolar está perfecto dejarla vinculada.
);
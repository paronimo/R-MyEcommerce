import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductoTarjeta from '../../pages/target.jsx';
import './products.css';

function ProductsList() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(true);

  // Simulamos una petición HTTP a la API Rest (Sprint 6 requerirá fetch real)
  useEffect(() => {
    setTimeout(() => {
      setProductos([
        { id: 1, nombre: "Ataúd Premium de Cedro", precio: 2500, imagen: "https://via.placeholder.com/150", stock: 5 },
        { id: 2, nombre: "Urna Ecológica Biodegradable", precio: 800, imagen: "https://via.placeholder.com/150", stock: 12 },
        { id: 3, nombre: "Parcela Familiar - Sector Los Pinos", precio: 5000, imagen: "https://via.placeholder.com/150", stock: 2 },
        { id: 4, nombre: "Mantenimiento Anual de Césped", precio: 300, imagen: "https://via.placeholder.com/150", stock: 0 }, // Sin stock
      ]);
      setCargando(false);
    }, 1000); // Simula 1 segundo de espera
  }, []);

  // Filtrado por nombre (Requerimiento US#8)
  const productosFiltrados = productos.filter(prod =>
    prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) {
    return <div className="loading-state">⏳ Cargando catálogo del más allá...</div>;
  }

  return (
    <div className="products-module">
      <div className="products-header">
        <h2>📦 Gestión de Productos</h2>
        <div className="header-actions">
          <input 
            type="text" 
            placeholder="Buscar producto por nombre..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="search-input"
          />
          <Link to="/products/new" className="btn btn-primary">➕ Agregar Producto</Link>
        </div>
      </div>

      {productosFiltrados.length === 0 ? (
        <p className="no-results">No se encontraron productos que coincidan con la búsqueda.</p>
      ) : (
        <div className="products-grid">
          {productosFiltrados.map(prod => (
            <ProductoTarjeta key={prod.id} producto={prod} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsList;
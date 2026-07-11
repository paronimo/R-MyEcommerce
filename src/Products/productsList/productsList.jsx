import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductoTarjeta from '../Pages/target.jsx';
import productosData from './products.json'; // 👈 ¡Importación directa como propusiste!

function ProductsList() {
  const [busqueda, setBusqueda] = useState('');

  // Filtrado por nombre en tiempo real (User Story #8)
  const productosFiltrados = productosData.filter(prod =>
    prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="products-list-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>📦 Gestión de Productos Funerarios</h2>
        <div>
          <input 
            type="text" 
            placeholder="Buscar por nombre..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <Link to="/products/new" className="btn btn-primary" style={{ background: '#27AE60', color: 'white', padding: '8px 12px', borderRadius: '4px', textDecoration: 'none' }}>
            Agregar Producto
          </Link>
        </div>
      </div>

      {productosFiltrados.length === 0 ? (
        <p>No hay elementos que coincidan con la búsqueda.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {productosFiltrados.map(prod => (
            <ProductoTarjeta key={prod.id} producto={prod} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsList;
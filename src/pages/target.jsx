import React from 'react';
// Si usas React Router para la navegación, cambiamos la etiqueta 'a' por 'Link'
import { Link } from 'react-router-dom'; 

const ProductoTarjeta = ({ producto }) => {
  const { id, nombre, precio, imagen, stock } = producto;
  const sinStock = stock === 0;

  return (
    <div className={`target ${sinStock ? 'target--soldout' : ''}`}>
      {sinStock ? (
        // Si no hay stock, renderizamos un div común para evitar la navegación
        <div className="target-link disabled-link">
          <img src={imagen} alt={nombre} />
          <div className="target-info">
            <h3>{nombre}</h3>
            <p>{precio} pts</p>
          </div>
          <span className="badge-sin-stock">Sin stock</span>
        </div>
      ) : (
        // Si hay stock, usamos el Link de React Router (o un 'a' normal si prefieres)
        <Link to={`/products/${id}`} className="target-link">
          <img src={imagen} alt={nombre} />
          <div className="target-info">
            <h3>{nombre}</h3>
            <p>{precio} pts</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProductoTarjeta;
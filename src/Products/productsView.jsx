import { useParams, Link } from 'react-router-dom';

function ProductView({ isNew = false }) {
  const { id } = useParams();

  return (
    <div style={{ padding: '1.5rem' }}>
      <h2>{isNew ? 'Crear producto' : `Detalle del producto ${id || 'nuevo'}`}</h2>
      <p>Esta vista se puede completar luego con el formulario de producto.</p>
      <Link to="/products">Volver al listado</Link>
    </div>
  );
}

export default ProductView;

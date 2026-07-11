import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productosData from './products.json'; // Importamos la misma fuente de datos

function ProductView({ isNew = false }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Estado inicial del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: '',
    imagen: ''
  });

  useEffect(() => {
    // Si NO es un producto nuevo, buscamos los datos por el ID de la URL (US#9)
    if (!isNew && id) {
      const productoEncontrado = productosData.find(p => p.id === parseInt(id));
      if (productoEncontrado) {
        setFormData(productoEncontrado);
      } else {
        // Si ingresan un ID que no existe, redirigimos al 404
        navigate('/404');
      }
    }
  }, [id, isNew, navigate]);

  // Manejador para actualizar los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      // Convertimos a número si el campo es precio o stock
      [name]: name === 'precio' || name === 'stock' ? parseInt(value) || 0 : value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Validación requerida (US#9): nombre es obligatorio
    if (!formData.nombre.trim()) {
      alert("El nombre del producto es requerido.");
      return;
    }

    if (isNew) {
      console.log("Haciendo petición POST a /products/new con:", formData);
      alert("¡Producto creado con éxito (Simulado)!");
    } else {
      console.log(`Haciendo petición PUT a /products/${id}/edit con:`, formData);
      alert("¡Modificaciones guardadas con éxito (Simulado)!");
    }
    navigate('/products'); // Volvemos al listado
  };

  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este servicio/producto?")) {
      console.log(`Haciendo petición DELETE a /products/${id}/delete`);
      alert("Producto eliminado (Simulado)");
      navigate('/products');
    }
  };

  return (
    <div className="product-view-container" style={{ maxWidth: '600px', background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <h2>
        {isNew ? "✨ Registrar Nuevo Servicio/Ataúd" : `Productos > #000${formData.id}`}
      </h2>
      <p style={{ color: '#7F8C8D', marginBottom: '20px' }}>
        {isNew ? "Ingresá los datos para la nueva oferta de la tienda." : "Resumen rápido y edición de datos."}
      </p>

      <form onSubmit={handleSave}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nombre del Producto:</label>
          <input 
            type="text" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Precio (pts):</label>
            <input 
              type="number" 
              name="precio" 
              value={formData.precio} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Stock Disponible:</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button type="button" onClick={() => setFormData({...formData, stock: Math.max(0, formData.stock - 1)})} style={{ padding: '10px' }}>➖</button>
              <input 
                type="number" 
                name="stock" 
                value={formData.stock} 
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', textAlignment: 'center', border: '1px solid #ccc' }}
              />
              <button type="button" onClick={() => setFormData({...formData, stock: formData.stock + 1})} style={{ padding: '10px' }}>➕</button>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Descripción:</label>
          <textarea 
            name="descripcion" 
            value={formData.descripcion} 
            onChange={handleChange}
            rows="3"
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>URL de la Imagen:</label>
          <input 
            type="text" 
            name="imagen" 
            value={formData.imagen} 
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
          <div>
            <button type="button" onClick={() => navigate('/products')} style={{ background: '#BDC3C7', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', marginRight: '10px', cursor: 'pointer' }}>
              Cancelar
            </button>
            <button type="submit" style={{ background: '#27AE60', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Guardar
            </button>
          </div>

          {!isNew && (
            <button type="button" onClick={handleDelete} style={{ background: '#E74C3C', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              Eliminar Producto
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ProductView;
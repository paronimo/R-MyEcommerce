import { Link } from 'react-router-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';
import './home.css';

const Home = () => {
  // Simulamos datos de sesión requeridos por la US#6
  const username = "Maciel"; 

  return (
    <div className="home-page">
      <Header user={username} />
      
      <div className="home-content">
        <h2>¿Qué es lo que te interesa gestionar hoy?</h2>
        
        <div className="dashboard-cards">
          {/* Bloque de Productos (US#6 Escenarios 1, 3 y 4) */}
          <div className="stat-card">
            <h3>📦 Módulo Productos</h3>
            <p className="stat-number">45 Ataúdes / Urnas</p>
            <div className="card-actions">
              <Link to="/products" className="btn btn-secondary">Ver Listado</Link>
              <Link to="/products/new" className="btn btn-primary">Agregar Producto</Link>
            </div>
          </div>

          {/* Bloque de Categorías (US#6 Escenarios 2, 5 y 6) */}
          <div className="stat-card">
            <h3>🏪 Módulo Categorías</h3>
            <p className="stat-number">4 Registradas</p>
            <div className="card-actions">
              <Link to="/categories" className="btn btn-secondary">Ver Listado</Link>
              <Link to="/categories/new" className="btn btn-primary">Agregar Categoría</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
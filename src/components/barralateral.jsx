import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  // Estado para controlar el menú desplegable en pantallas < 1024px (US#5)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa visible solo en móviles/tablets */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Si el menú está abierto en móvil, este overlay permite cerrarlo haciendo click afuera */}
      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}

      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">Gestionadora de actos funebres</h2>
          <p className="sidebar-slogan">"Piensa hoy, descansa mañana..."</p>
        </div>
        
        <nav className="sidebar-menu">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>
            🪦 Inicio
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>
            📦 Productos y Ataúdes
          </NavLink>
          <NavLink to="/categories" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>
            🏪 Categorías (Césped/Nichos)
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setIsOpen(false)}>
            👤 Mi Perfil
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
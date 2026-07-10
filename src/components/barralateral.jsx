import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}

      <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">Gestionadora de actos funebres</h2>
          <p className="sidebar-slogan">"Piensa hoy, descansa mañana..."</p>
        </div>

        <nav className="sidebar-menu">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
            🪦 Inicio
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
            📦 Productos y Ataúdes
          </NavLink>
          <NavLink to="/categories" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
            🏪 Categorías (Césped/Nichos)
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setIsOpen(false)}>
            👤 Mi Perfil
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
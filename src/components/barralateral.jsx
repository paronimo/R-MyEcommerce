import { NavLink } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Mi App</h2>
      </div>
      <nav className="sidebar-menu">
        {/* NavLink detecta automáticamente la ruta activa */}
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Inicio
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          Sobre Nosotros
        </NavLink>
      </nav>
    </aside>
  );
}
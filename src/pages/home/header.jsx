import { Link } from 'react-router-dom';

const Header = ({ user }) => {
  return (
    <header className="main-header">
      <div className="header-left">
        <h1>¡Hola, {user ?? 'Invitado'}!</h1>
        <p className="welcome-text">Panel de Administración de Parcelas y Servicios</p>
      </div>

      <div className="header-right">
        <Link to="/profile" className="profile-indicator">
          👤 Ver Perfil
        </Link>
      </div>
    </header>
  );
}

export default Header;
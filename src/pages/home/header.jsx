import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
    <header>
        <div class="container-padre">
        <h1>¡Hola! Bienvenido a Lercado</h1>

        <div class="barra-busqueda">
            <form class="formulario-busqueda" action="/search" method="get">
                <input type="text" class="campo-busqueda" name="query" placeholder="Buscar..."></input>
                <button type="submit" class="boton-buscar">Buscar</button>
            </form>
        </div>

        <div class="header-right">
            <a href="/cart" class="cart-button">
                <span class="cart-count">
                    <span class="cart-icon">🛒</span>
                    <span class="cart-value">{cartCount || 0}</span>
                </span>
            </a>
            <div class="Perfil-container">
                <span className="username"> {user ?? 'Invitado'}</span>

            </div>
        </div>          
  </div>
        <nav>
            <NavLink to="/">Sobre Nosotros</NavLink>
            <NavLink to="/login">Iniciar Sesion</NavLink>
            <NavLink to="/register">Registrarse</NavLink>
        </nav>
    </header>
    );
}

export default header;
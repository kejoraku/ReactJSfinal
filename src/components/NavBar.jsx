import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__brand">
        Mi Tienda
      </NavLink>

      <div className="navbar__links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')}
        >
          Catálogo
        </NavLink>
        <NavLink
          to="/category/remeras"
          className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')}
        >
          Remeras
        </NavLink>
        <NavLink
          to="/category/pantalones"
          className={({ isActive }) => (isActive ? 'navbar__link navbar__link--active' : 'navbar__link')}
        >
          Pantalones
        </NavLink>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;

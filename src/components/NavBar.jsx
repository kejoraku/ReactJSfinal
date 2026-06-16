import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#eee' }}>
      <Link to="/"><h3>Mi Tienda 🛒</h3></Link>
      <div>
        <Link to="/category/remeras" style={{ marginRight: '10px' }}>Remeras</Link>
        <Link to="/category/pantalones">Pantalones</Link>
      </div>
    </nav>
  );
};

export default NavBar;

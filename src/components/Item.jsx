import { Link } from 'react-router-dom';

const Item = ({ id, name, price, img }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`} style={{ background: 'blue', color: 'white', padding: '5px 10px', textDecoration: 'none' }}>
        Ver Detalle
      </Link>
    </div>
  );
};

export default Item;

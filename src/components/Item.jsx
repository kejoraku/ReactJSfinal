import { Link } from 'react-router-dom';

const Item = ({ id, name, price, img, stock }) => {
  return (
    <article className="item-card">
      <img src={img} alt={name} className="item-card__image" />
      <h3>{name}</h3>
      <p className="item-card__price">${price.toLocaleString('es-AR')}</p>
      {stock === 0 && <p className="item-card__no-stock">Sin stock</p>}
      <Link to={`/item/${id}`} className="btn btn--secondary">
        Ver detalle
      </Link>
    </article>
  );
};

export default Item;

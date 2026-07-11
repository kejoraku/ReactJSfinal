import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';
import ItemCount from './ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const { name, price, description, img, stock } = product;

  const handleOnAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <article className="item-detail">
      <img src={img} alt={name} className="item-detail__image" />
      <div className="item-detail__content">
        <h2>{name}</h2>
        <p className="item-detail__description">{description}</p>
        <p className="item-detail__price">${price.toLocaleString('es-AR')}</p>
        <p className="item-detail__stock">
          {stock > 0 ? `Stock disponible: ${stock}` : 'Producto sin stock'}
        </p>

        {!added && stock > 0 && (
          <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
        )}

        {added && (
          <div className="item-detail__added">
            <p>Producto agregado al carrito.</p>
            <Link to="/cart" className="btn btn--primary">Ver carrito</Link>
          </div>
        )}
      </div>
    </article>
  );
};

export default ItemDetail;

import { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="item-count__controls">
        <button type="button" onClick={decrement} aria-label="Disminuir cantidad">-</button>
        <span>{quantity}</span>
        <button type="button" onClick={increment} aria-label="Aumentar cantidad">+</button>
      </div>
      <button
        type="button"
        className="btn btn--primary"
        onClick={() => onAdd(quantity)}
        disabled={stock === 0}
      >
        {stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
      </button>
    </div>
  );
};

export default ItemCount;

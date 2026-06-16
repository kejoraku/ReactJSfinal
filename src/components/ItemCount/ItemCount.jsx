import { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <button onClick={decrement} style={{ width: '30px', height: '30px', cursor: 'pointer' }}>-</button>
        <h4 style={{ margin: 0, width: '20px', textAlign: 'center' }}>{quantity}</h4>
        <button onClick={increment} style={{ width: '30px', height: '30px', cursor: 'pointer' }}>+</button>
      </div>
      <button 
        onClick={() => onAdd(quantity)} 
        disabled={stock === 0}
        style={{ 
          padding: '8px 15px', 
          background: stock > 0 ? '#007bff' : '#ccc', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: stock > 0 ? 'pointer' : 'not-allowed'
        }}
      >
        {stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
      </button>
    </div>
  );
};

export default ItemCount;

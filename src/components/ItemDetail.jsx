import ItemCount from './ItemCount/ItemCount';

const ItemDetail = ({ name, price, description, img, stock }) => {
  const handleOnAdd = (quantity) => {
    console.log(`Agregadas ${quantity} unidades de ${name} al carrito`);
  };

  return (
    <div style={{ padding: '20px', display: 'flex', gap: '40px' }}>
      <img src={img} alt={name} style={{ width: '300px' }} />
      <div>
        <h2>{name}</h2>
        <p style={{ color: 'gray' }}>{description}</p>
        <h3>${price}</h3>
        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;

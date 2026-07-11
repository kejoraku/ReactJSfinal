import { useCart } from '../../context/useCart';

const CartItem = ({ item }) => {
  const { removeItem } = useCart();
  const subtotal = item.price * item.quantity;

  return (
    <article className="cart-item">
      <img src={item.img} alt={item.name} className="cart-item__image" />
      <div className="cart-item__info">
        <h3>{item.name}</h3>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio unitario: ${item.price.toLocaleString('es-AR')}</p>
        <p className="cart-item__subtotal">
          Subtotal: ${subtotal.toLocaleString('es-AR')}
        </p>
      </div>
      <button
        type="button"
        className="btn btn--danger"
        onClick={() => removeItem(item.id)}
      >
        Eliminar
      </button>
    </article>
  );
};

export default CartItem;

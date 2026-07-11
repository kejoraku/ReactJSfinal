import { Link } from 'react-router-dom';
import { useCart } from '../../context/useCart';
import CartItem from './CartItem';

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <section className="cart cart--empty">
        <h1>Tu carrito está vacío</h1>
        <p>Agregá productos desde el catálogo para comenzar tu compra.</p>
        <Link to="/" className="btn btn--primary">Ver productos</Link>
      </section>
    );
  }

  return (
    <section className="cart">
      <div className="cart__header">
        <h1>Carrito de compras</h1>
        <button type="button" className="btn btn--ghost" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>

      <div className="cart__items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart__summary">
        <p className="cart__total">Total: ${totalPrice.toLocaleString('es-AR')}</p>
        <Link to="/checkout" className="btn btn--primary">
          Finalizar compra
        </Link>
      </div>
    </section>
  );
};

export default Cart;

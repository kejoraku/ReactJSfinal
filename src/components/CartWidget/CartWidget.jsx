import { Link } from 'react-router-dom';
import { useCart } from '../../context/useCart';

const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart" className="cart-widget" aria-label="Ir al carrito">
      <span className="cart-widget__icon" aria-hidden="true">🛒</span>
      {totalQuantity > 0 && (
        <span className="cart-widget__badge">{totalQuantity}</span>
      )}
    </Link>
  );
};

export default CartWidget;

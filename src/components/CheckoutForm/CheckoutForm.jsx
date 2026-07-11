import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useCart } from '../../context/useCart';
import { createOrder } from '../../services/firestoreService';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  if (cart.length === 0 && !orderId) {
    return <Navigate to="/cart" replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresá un email válido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio';
    } else if (!/^\d{8,15}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Ingresá un teléfono válido';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'La dirección es obligatoria';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const order = {
        buyer: formData,
        items: cart.map(({ id, name, price, quantity, img }) => ({
          id,
          name,
          price,
          quantity,
          img,
        })),
        total: totalPrice,
      };

      const generatedOrderId = await createOrder(order);
      setOrderId(generatedOrderId);
      clearCart();
      setFormData(initialForm);
    } catch {
      setErrors({ form: 'No se pudo generar la orden. Intentá nuevamente.' });
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <section className="checkout checkout--success">
        <h1>¡Compra confirmada!</h1>
        <p>Tu orden fue registrada correctamente en Firestore.</p>
        <p className="checkout__order-id">
          ID de orden: <strong>{orderId}</strong>
        </p>
        <Link to="/" className="btn btn--primary">Volver al catálogo</Link>
      </section>
    );
  }

  return (
    <section className="checkout">
      <h1>Checkout</h1>
      <p className="checkout__total">
        Total a pagar: ${totalPrice.toLocaleString('es-AR')}
      </p>

      <form className="checkout-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Nombre completo</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="form-error">{errors.name}</span>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="form-error">{errors.email}</span>}

        <label htmlFor="phone">Teléfono</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="form-error">{errors.phone}</span>}

        <label htmlFor="address">Dirección</label>
        <input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <span className="form-error">{errors.address}</span>}

        {errors.form && <span className="form-error">{errors.form}</span>}

        <button type="submit" className="btn btn--primary" disabled={loading}>
          {loading ? 'Generando orden...' : 'Confirmar compra'}
        </button>
      </form>
    </section>
  );
};

export default CheckoutForm;

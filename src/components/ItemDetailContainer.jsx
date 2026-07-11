import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/firestoreService';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeItemId, setActiveItemId] = useState(itemId);

  if (activeItemId !== itemId) {
    setActiveItemId(itemId);
    setProduct(null);
    setError('');
    setLoading(true);
  }

  useEffect(() => {
    let isActive = true;

    getProductById(itemId)
      .then((response) => {
        if (isActive) {
          setProduct(response);
        }
      })
      .catch(() => {
        if (isActive) {
          setError('No se pudo cargar el detalle del producto.');
        }
      })
      .finally(() => {
        if (isActive) {
          setLoading(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, [itemId]);

  if (loading) {
    return <p className="loader">Cargando detalle del producto...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!product) {
    return <p className="error-message">El producto no existe.</p>;
  }

  return (
    <section className="item-detail-container">
      <ItemDetail product={product} />
    </section>
  );
};

export default ItemDetailContainer;

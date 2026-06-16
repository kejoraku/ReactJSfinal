import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../asyncMock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then(response => setProduct(response))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p>Cargando detalle del producto...</p>;

  return (
    <div>
      {product ? <ItemDetail {...product} /> : <p>El producto no existe.</p>}
    </div>
  );
};

export default ItemDetailContainer;

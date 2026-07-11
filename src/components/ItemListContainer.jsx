import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/firestoreService';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeCategory, setActiveCategory] = useState(categoryId);

  if (activeCategory !== categoryId) {
    setActiveCategory(categoryId);
    setProducts([]);
    setError('');
    setLoading(true);
  }

  useEffect(() => {
    let isActive = true;

    getProducts(categoryId)
      .then((response) => {
        if (isActive) {
          setProducts(response);
        }
      })
      .catch(() => {
        if (isActive) {
          setError('No se pudieron cargar los productos.');
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
  }, [categoryId]);

  if (loading) {
    return <p className="loader">Cargando productos...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (products.length === 0) {
    return (
      <section className="catalog">
        <h1>{greeting}</h1>
        <p className="empty-message">No hay productos en esta categoría.</p>
      </section>
    );
  }

  return (
    <section className="catalog">
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </section>
  );
};

export default ItemListContainer;

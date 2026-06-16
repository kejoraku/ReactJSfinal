const products = [
  { id: '1', name: 'Remera Negra', price: 15000, category: 'remeras', img: 'https://placehold.co', stock: 10, description: 'Remera de algodón 100%' },
  { id: '2', name: 'Remera Blanca', price: 15000, category: 'remeras', img: 'https://placehold.co', stock: 7, description: 'Remera básica blanca' },
  { id: '3', name: 'Pantalón Jean', price: 35000, category: 'pantalones', img: 'https://placehold.co', stock: 5, description: 'Jean azul clásico slim fit' }
];

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(products.filter(prod => prod.category === categoryId));
      } else {
        resolve(products);
      }
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId));
    }, 500);
  });
};

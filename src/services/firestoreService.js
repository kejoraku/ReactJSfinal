import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase/config';

const itemsCollection = collection(db, 'items');
const ordersCollection = collection(db, 'orders');

export const getProducts = async (categoryId) => {
  if (categoryId) {
    const categoryQuery = query(itemsCollection, where('category', '==', categoryId));
    const snapshot = await getDocs(categoryQuery);
    return snapshot.docs.map((itemDoc) => ({
      id: itemDoc.id,
      ...itemDoc.data(),
    }));
  }

  const snapshot = await getDocs(itemsCollection);
  return snapshot.docs.map((itemDoc) => ({
    id: itemDoc.id,
    ...itemDoc.data(),
  }));
};

export const getProductById = async (productId) => {
  const productRef = doc(db, 'items', productId);
  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
};

export const createOrder = async (orderData) => {
  const orderRef = await addDoc(ordersCollection, {
    ...orderData,
    createdAt: serverTimestamp(),
  });

  return orderRef.id;
};

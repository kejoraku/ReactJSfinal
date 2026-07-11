import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="¡Bienvenidos a nuestra Tienda!" />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer greeting="Categoría seleccionada" />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="*" element={<h2 className="error-message">404 - Página no encontrada</h2>} />
          </Routes>
        </main>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

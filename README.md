# Proyecto Final - E-commerce React

Single Page Application de e-commerce desarrollada con React, React Router, Context API y Firestore.

## Temática

Tienda de indumentaria con catálogo de remeras y pantalones.

## Funcionalidades

- Listado dinámico de productos desde Firestore (`ItemListContainer` / `ItemList` / `Item`)
- Detalle de producto con selección de cantidad (`ItemDetailContainer` / `ItemDetail` / `ItemCount`)
- Carrito global con Context API (`CartProvider`, `Cart`, `CartItem`, `CartWidget`)
- Checkout con validación de formulario y registro de órdenes en Firestore
- Navegación SPA con React Router (`/`, `/category/:categoryId`, `/item/:itemId`, `/cart`, `/checkout`)
- Renderizado condicional para loaders, carrito vacío, producto inexistente y confirmación de compra

## Tecnologías

- React 19
- Vite
- React Router DOM
- Firebase / Firestore
- CSS

## Estructura principal

```text
src/
  components/
    NavBar.jsx
    CartWidget/
    ItemListContainer.jsx
    ItemList.jsx
    Item.jsx
    ItemDetailContainer.jsx
    ItemDetail.jsx
    ItemCount/
    Cart/
    CheckoutForm/
  context/
    CartContext.jsx
  firebase/
    config.js
  services/
    firestoreService.js
```

## Configuración de Firebase

1. Crear un proyecto en [Firebase Console](https://console.firebase.google.com/).
2. Crear una base de datos Firestore en modo prueba.
3. Crear la colección `items` con documentos que contengan estos campos:

| Campo | Tipo | Ejemplo |
| --- | --- | --- |
| `name` | string | Remera Negra |
| `price` | number | 15000 |
| `category` | string | remeras |
| `img` | string | https://... |
| `stock` | number | 10 |
| `description` | string | Remera de algodón 100% |

4. Copiar `.env.example` a `.env` y completar las credenciales:

```bash
cp .env.example .env
```

5. Las órdenes se guardan automáticamente en la colección `orders` al confirmar una compra.

## Instalación

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: servidor de desarrollo
- `npm run build`: build de producción
- `npm run preview`: vista previa del build
- `npm run lint`: análisis con ESLint

## Deploy sugerido

El proyecto puede desplegarse en Vercel o Netlify conectando el repositorio de GitHub y configurando las variables de entorno de Firebase.

## Autor

Completar con nombre y apellido del estudiante.

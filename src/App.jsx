
import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./index.css";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <header>
          <h1>🛒 Online Shopping Cart</h1>
        </header>

        <ProductList />

        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;

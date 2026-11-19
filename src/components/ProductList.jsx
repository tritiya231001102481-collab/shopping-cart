
import React from "react";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 50000, image: "💻" },
  { id: 2, name: "Mobile", price: 20000, image: "📱" },
  { id: 3, name: "Headphones", price: 2000, image: "🎧" },
  { id: 4, name: "Keyboard", price: 1500, image: "⌨️" },
  { id: 5, name: "Mouse", price: 800, image: "🖱️" },
  { id: 6, name: "Smart Watch", price: 5000, image: "⌚" },
];

function ProductList() {
  const { dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className="products">
      <h2>Our Products</h2>

      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              {product.image}
            </div>

            <h3>{product.name}</h3>

            <p>₹{product.price.toLocaleString("en-IN")}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

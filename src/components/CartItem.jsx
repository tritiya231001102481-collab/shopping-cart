
import React from "react";
import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();

  const updateQuantity = (quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id: item.id,
        quantity,
      },
    });
  };

  const removeItem = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: item.id,
    });
  };

  return (
    <div className="cart-item">
      <div>
        <h3>{item.image} {item.name}</h3>
        <p>Price: ₹{item.price.toLocaleString("en-IN")}</p>
      </div>

      <div className="quantity">
        <button
          onClick={() => updateQuantity(item.quantity - 1)}
          disabled={item.quantity === 1}
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => updateQuantity(item.quantity + 1)}
        >
          +
        </button>
      </div>

      <p>
        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
      </p>

      <button className="remove" onClick={removeItem}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;

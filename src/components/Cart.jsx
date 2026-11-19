
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { state, dispatch } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [message, setMessage] = useState("");

  const subtotal = state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = subtotal * state.coupon / 100;

  const discountedTotal = subtotal - discount;

  const gst = discountedTotal * 0.18;

  const grandTotal = discountedTotal + gst;

  const applyCoupon = () => {
    if (couponCode.trim().toUpperCase() === "SAVE10") {
      dispatch({
        type: "APPLY_COUPON",
        payload: 10,
      });

      setMessage("Coupon applied successfully!");
    } else {
      dispatch({
        type: "APPLY_COUPON",
        payload: 0,
      });

      setMessage("Invalid coupon code!");
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {state.cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        state.cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))
      )}

      <div className="bill">
        <h3>Order Summary</h3>

        <p>Subtotal: ₹{subtotal.toFixed(2)}</p>

        <div className="coupon">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            value={couponCode}
            onChange={e => setCouponCode(e.target.value)}
          />

          <button onClick={applyCoupon}>
            Apply Coupon
          </button>
        </div>

        <p>{message}</p>

        <p>Discount ({state.coupon}%): -₹{discount.toFixed(2)}</p>

        <p>GST (18%): ₹{gst.toFixed(2)}</p>

        <hr />

        <h2>Grand Total: ₹{grandTotal.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Cart;

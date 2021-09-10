import React from "react";
import "./Cart.css";
import cart from "../../images/cart.gif";
import { CartContext } from "../../context/cartContext";

function Cart(props) {
  let [cartItem, setCartItem] = React.useContext(CartContext);

  return (
    <div className="cart-wrapper">
      <img src={cart} alt="cart-img" className="imgd"/>
      <span>{cartItem.length}</span>
    </div>
  );
}

export default Cart;

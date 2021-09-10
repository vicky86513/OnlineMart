import React, { useContext } from "react";
import "./Product.css";
import { CartContext } from "../../context/cartContext";

const Product = (props) => {
  let { item } = props;
  let [cartItem, setCartItem] = React.useContext(CartContext);

  
  return (
    <div className="each-item">
      <div className="img-wrapper">
        <img src={item.searchImage} alt="product-img" />
      </div>
      <div className="content-wrapper">
        <h3 className="brand-name">{item.brand}</h3>
        <h6 className="brand-desc"> {item.additionalInfo}</h6><br/>
        <section className="color">Color: <button class="btn-color"></button>
        <button class="btn-color1"></button>
        <button class="btn-color2"></button>
        </section>
        <button className="sizes">sizes: <span> {item.sizes}</span>
        </button>

        <h5>
          <span className="b-d-price">Rs. {item.price}</span>
          {item.discountDisplayLabel ? (
            <span className="b-price">Rs. {item.mrp}</span>
          ) : null}
          <span className="b-discount">{item.discountDisplayLabel}</span>
        </h5>
        {/* <button className="add-to-cart-btn" onClick={() => setCartItem(item)}><span>
          Add to Cart</span> */}
          <button className="add-to-cart-btn" onClick={() => setCartItem(item)}><span>
          Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Product;

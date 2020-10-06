import React from "react";
import { useStateValue } from "../../../stateProvider";

import "../checkout/checkoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout-product">
      <img className="checkout-product-image" src={image} />

      <div className="checkout-productInfo">
        <p className="checkout-product-title">{title}</p>

        <p className="checkout-product-price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>

        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

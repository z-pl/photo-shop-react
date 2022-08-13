import React from "react";
import { Context } from '../Context';
import Image from "../components/Image";
import CartItem from "../components/CartItem";
export default function Cart() {

  const {getCartImages} = React.useContext(Context);

  const imageElements = getCartImages().map((photo => {
    return <CartItem url={photo.url} id={photo.id}/>
  }))

  const total = imageElements.length * 5.99;

  const placeOrder = (imageElements.length ?
                    <button className="place--order-btn">Place Order</button>
                    : <div className="cart--state--text">You have no items in your cart</div>)
  return (
    <div className="checkout--container">
      {imageElements}
      <div className="total--cost">
        Total: ${total}
      </div>
      <div className="cart--state--text">{placeOrder}</div>
    </div>
  )
}

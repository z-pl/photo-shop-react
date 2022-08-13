import React from "react";
import { Context } from '../Context';
import Image from "../components/Image";
import CartItem from "../components/CartItem";
export default function Cart() {

  const {getCartImages, emptyCart} = React.useContext(Context);
  const [ordering, setOrdering] = React.useState(false);

  const imageElements = getCartImages().map((photo => {
    return <CartItem key = {photo.id} url={photo.url} id={photo.id}/>
  }))





  const handleOrderClick = () => {
    setOrdering(true)
    console.log("text")
    setTimeout(() => {
      setOrdering(false)
      emptyCart();
    }, 3000);

  }

  const total = imageElements.length * 5.99;
  const placeOrder = (
    imageElements.length ?
    <button className="place--order-btn" onClick = {handleOrderClick}>Place Order</button>
    : <div className="cart--state--text">You have no items in your cart</div>);


  return (
    <div className="checkout--container">
      {imageElements}
      <div className="total--cost">
        Total: ${total}
      </div>
      {!ordering && <div className="cart--state--text">{placeOrder}</div>}
      {ordering && <div className="ordering--text">Ordering...</div>}
    </div>
  )
}

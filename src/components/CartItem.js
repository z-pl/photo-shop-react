import React from "react"
import { Context } from '../Context';

export default function CartItem({url, id}) {
  const { removeFromCart} = React.useContext(Context);

  const handleRemoveItemClick = () => {
    removeFromCart(id)
  }

  return (
    <div className="cart--item--container">
      <img className="cart--img" src={url} />
      <div className="cart--actions">
        <p className="cart--price">$5.99</p>
        <p className="remove--btn" onClick={handleRemoveItemClick}>Remove Photo</p>
      </div>
    </div>
  )
}

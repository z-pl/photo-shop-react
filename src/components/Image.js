import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { faHeart as EmptyHeart } from '@fortawesome/fontawesome-free-regular'
import { Context } from '../Context';
import { hover } from "@testing-library/user-event/dist/hover";
import PropTypes from 'prop-types'

export default function Image({url, size, isFav, id}) {
  const [hovered, setHovered] = React.useState(false);
  const {toggleFavorite, addToCart, isInCart, removeFromCart} = React.useContext(Context);

  const onHover = () => {
    setHovered(true);
  }

  const onHoverExit = () => {
    setHovered(false);
  }

  const handleHeartClick = () => {
    toggleFavorite(id)
  }

  const handleAddClick = () => {
   if (isInCart(id)) {
    removeFromCart(id)
   }
   else {
    addToCart(id)
   }
  }

  const heartIcon = (isFav ? <FontAwesomeIcon icon={faHeart}/> : <FontAwesomeIcon icon={EmptyHeart}/>);
  const addIcon = (isInCart(id) ? <FontAwesomeIcon icon={faCartShopping} /> : <FontAwesomeIcon icon={faCirclePlus} /> )
  return (
    <div className={`image--container ${size} isFav-${isFav} cart-${isInCart(id)}`} onMouseEnter={onHover} onMouseLeave = {onHoverExit}>
      <div className="image--icons">
        {hovered && <span onClick={handleHeartClick}>{heartIcon}</span>}
        {hovered && <span onClick={handleAddClick}>{addIcon}</span>}
      </div>
      <img src ={url}/>
    </div>
  )
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  isFav: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
}

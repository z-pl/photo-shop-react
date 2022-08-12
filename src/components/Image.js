import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import { faHeart as EmptyHeart } from '@fortawesome/fontawesome-free-regular'
import { Context } from '../Context';
import { hover } from "@testing-library/user-event/dist/hover";

export default function Image({url, size, isFav, id}) {
  const [hovered, setHovered] = React.useState(false);
  const {toggleFavorite} = React.useContext(Context);

  const onHover = () => {
    setHovered(true);
  }

  const onHoverExit = () => {
    setHovered(false);
  }

  const handleHeartClick = () => {
    toggleFavorite(id)
  }

  const heartIcon = (isFav ? <FontAwesomeIcon icon={faHeart}/> : <FontAwesomeIcon icon={EmptyHeart}/>);

  return (
    <div className={`image--container ${size} isFav-${isFav}`} onMouseEnter={onHover} onMouseLeave = {onHoverExit}>
      <div className="image--icons">
        {hovered && <span onClick={handleHeartClick}>{heartIcon}</span>}
        {hovered && <span><FontAwesomeIcon icon={faCirclePlus} /></span>}
      </div>
      <img src ={url}/>
    </div>
  )
}

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header--container">
      <Link to="/"><h1 className="header--title"><span className="title-span">Pic</span>Some</h1></Link>
      <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
    </header>
  )
}

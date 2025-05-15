import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"

const CartIcon = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ background: "none", border: "none", cursor: "pointer" }}>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
    </button>
  )
}

export default CartIcon

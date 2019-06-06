import React from "react";
import Container from "./styles.storenav";
import CartIcon from "./shared-icons/CartIcon";
import { Link } from "react-router-dom";

const StoreNav: React.FC = (props: object) => {
  return (
    <Container>
      <Link to="/">
        <button className="btn-store">
          <p>Store</p>
        </button>
      </Link>
      <Link to="/cart">
        <button className="btn-cart">
          <CartIcon className="cart-icon" />
          <p>{"(0)"}</p>
        </button>
      </Link>
    </Container>
  );
};

export default StoreNav;

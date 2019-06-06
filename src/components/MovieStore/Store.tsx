import React from "react";
import Container from "./styles.store";
import CartIcon from "../shared-icons/CartIcon";

import List from "./List";

const Store: React.FC = (props: object) => {
  return (
    <Container>
      <header>
        <button>
          <p>Store</p>
        </button>
        <button>
          <CartIcon className={""} />
          <p>{"0"}</p>
        </button>
      </header>
      <List />
    </Container>
  );
};

export default Store;

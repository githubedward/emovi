import styled from "styled-components";
import { flexCenter } from "./shared-styles/styles.global";
import { fSize, fWeight, color } from "./shared-styles/styles.guide";

const buttonHt = 2.5;
const radius = buttonHt / 2 + "rem";

export default styled.nav`
  ${flexCenter};
  margin: 2rem 0;

  a {
    text-decoration: none;
  }

  button {
    ${flexCenter};
    width: 8rem;
    height: ${buttonHt + "rem"};
    outline: 0;
    background-color: white;

    &:active {
      background-color: ${color.lightgray};
    }

    p {
      font-weight: ${fWeight.light};
      font-size: ${fSize.t3};
    }
  }

  .btn-store {
    border-radius: ${radius} 0 0 ${radius};
  }
  .btn-cart {
    border-radius: 0 ${radius} ${radius} 0;
  }

  .cart-icon {
    height: ${fSize.t3};
  }
`;

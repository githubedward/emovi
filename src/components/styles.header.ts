import styled from "styled-components";
import { flexCenter, lobsterFont } from "./shared-styles/styles.global";
import { color } from "./shared-styles/styles.guide";

export default styled.header`
  ${flexCenter};
  width: 100vw;
  height: 5rem;
  background-color: ${color.superdarkgray};

  h1 {
    ${lobsterFont}
    color: ${color.theme3};
    letter-spacing: 2px;
  }
`;

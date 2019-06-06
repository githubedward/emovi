import styled from "styled-components";
import { flexCenter } from "../shared-styles/styles.global";
import { color } from "../shared-styles/styles.guide";

export default styled.header`
  ${flexCenter};
  width: 100vw;
  height: 5rem;
  background-color: ${color.theme3};

  h1 {
    color: white;
  }
`;

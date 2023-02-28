import { css } from "@emotion/react";
import { DesignTokens } from "../../globalStyles";

const { BG_Secondary } = DesignTokens;

export const formStyle = css`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;

  margin-bottom: 3rem;
  padding: 1rem 3.5rem;

  background-color: ${BG_Secondary};
  border-radius: 1rem;
  box-shadow: 0 5px 5px 0 hsla(180, 17%, 10%, 0.75);

  &::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -1.5rem;
    translate: 0 50%;

    width: 100%;
    height: 0.4rem;

    border-radius: 1rem;
    background-color: inherit;
  }
`;

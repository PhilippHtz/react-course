import { css } from "@emotion/react";
import { DesignTokens } from "../../globalStyles";
const { BG_Accent } = DesignTokens;

export const divStyle = css`
  margin: 0 auto;
  padding: 2rem;
  max-width: 75vw;
  min-width: 71rem;

  border-radius: 1.5rem;
`;

export const ButtonStyle = css`
  margin-inline: 1rem;
  padding: 1rem;
  min-width: 5rem;

  border: none;
  border-radius: 0.5rem;
  background-color: ${BG_Accent};

  color: #fff;
  font-size: 2.5rem;

  cursor: pointer;
`;

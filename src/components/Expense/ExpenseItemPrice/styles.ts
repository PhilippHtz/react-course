import { css } from "@emotion/react";
import { DesignTokens } from "../../../globalStyles";

const { BG_Accent } = DesignTokens;

export const ExpensePriceStyle = css`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  padding: 1rem 2rem;
  min-width: 15rem;
  height: 5rem;

  background-color: ${BG_Accent};
  border: 2px solid ${BG_Accent};

  text-align: center;
`;

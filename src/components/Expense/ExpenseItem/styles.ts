import { css } from "@emotion/react";
import { DesignTokens } from "../../../globalStyles";

const { BG_Secondary } = DesignTokens;

export const StyledExpenseItem = css`
  display: flex;
  align-items: center;

  margin-bottom: 1.5rem;
  padding: 1rem 3.5rem;

  background-color: ${BG_Secondary};
  border-radius: 1rem;
  box-shadow: 0 5px 5px 0 hsla(180, 17%, 10%, 0.75);

  &:last-of-type {
    margin-bottom: 0;
  }

  .expense-date,
  .expense-title,
  .expense-price {
    border-radius: 0.5rem;

    font-size: 2.5rem;
    line-height: 100%;
  }
`;

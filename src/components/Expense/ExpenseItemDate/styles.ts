import { css } from "@emotion/react";
import { DesignTokens } from "../../../globalStyles";

const { BG_Accent } = DesignTokens;

export const StyledExpenseDate = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  padding: 1.5rem 0;
  width: 18rem;
  min-height: 14rem;

  background-color: ${BG_Accent};

  text-align: center;
  list-style: none;

  .year {
    font-weight: 800;
  }

  .month {
    font-size: 2rem;
  }

  .month,
  .day {
    font-weight: 300;
    text-transform: uppercase;
  }
`;

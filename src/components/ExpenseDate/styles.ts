import { css } from "@emotion/react";
import { DesignTokens } from "../../globalStyles";

const { BG_Accent } = DesignTokens;

export const StyledExpenseDate = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
  width: 13.5rem;
  min-height: 13.5rem;

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

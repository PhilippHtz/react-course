import { css } from "@emotion/react";
import { DesignTokens } from "../../../globalStyles";
const { BG_Accent_Secondary, BG_Accent } = DesignTokens;

export const expenseControlStyle = css`
  label,
  input,
  button {
    width: 25rem;
    border-radius: 0.5rem;
    color: #fff;
  }

  label {
    display: block;

    font-size: 2.5rem;
    cursor: pointer;
  }

  input {
    padding: 1rem;

    background-color: ${BG_Accent_Secondary};
    border: none;

    font-size: 2.5rem;

    &::placeholder {
      color: white;
    }
  }

  button {
    padding: 1rem;

    background-color: ${BG_Accent};
    border: none;

    color: #fff;
    font-size: 2.5rem;

    cursor: pointer;
  }
`;

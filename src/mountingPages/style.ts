import { css } from "@emotion/react";
import { DesignTokens } from "../globalStyles";

const { BG_Accent_Secondary } = DesignTokens;

export const sectionStyle = css`
  margin: 0 auto;
  padding: 2rem;
  max-width: 75vw;
  min-width: 71rem;

  border-radius: 1.5rem;
  background-color: ${BG_Accent_Secondary};
`;

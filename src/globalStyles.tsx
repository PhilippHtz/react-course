import { Global, css } from "@emotion/react";

const CoreTokens = {
  Color: {
    mintGreen_900: "hsl(180, 17%, 5%)",
    mintGreen_800: "hsl(180, 17%, 20%)",
    mintGreen_700: "hsl(180, 17%, 35%)",
    mintGreen_600: "hsl(180, 17%, 50%)",
  },
};

export const DesignTokens = {
  BG_Primary: CoreTokens.Color.mintGreen_900,
  BG_Secondary: CoreTokens.Color.mintGreen_700,
  BG_Accent: CoreTokens.Color.mintGreen_600,
  BG_Accent_Secondary: CoreTokens.Color.mintGreen_800,
};

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          src: url("/fonts/Inter/Inter-VariableFont_slnt_wght.ttf");
          font-family: "Inter";
          font-weight: 100 900;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          font-family: "Inter", sans-serif;
          font-size: 10px;
          font-weight: 400;
          color: #fff;
        }

        body {
          background-color: ${DesignTokens.BG_Primary};

          font-size: 1.6rem;
        }

        #root {
          padding: 2rem;
          min-height: 100vh;
        }
      `}
    />
  );
};

export default GlobalStyles;

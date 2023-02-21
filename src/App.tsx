import { css } from "@emotion/react";
import ExpenseList from "./components/ExpenseList";
import GlobalStyles, { DesignTokens } from "./globalStyles";

const { BG_Accent_Secondary } = DesignTokens;

const sectionStyle = css`
  margin: 0 auto;
  padding: 2rem;
  max-width: 75vw;
  min-width: 71rem;

  border-radius: 1.5rem;
  background-color: ${BG_Accent_Secondary};

  > h1 {
    display: none;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <section css={sectionStyle}>
        <h1>Expense Tracker</h1>
        <ExpenseList />
      </section>
    </>
  );
};

export default App;

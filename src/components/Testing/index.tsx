import { useState } from "react";
import Button from "../General/Button";
import { ButtonStyle, divStyle } from "./style";

export const add = (count: number) => ++count;

export const subtract = (count: number) => --count;

const Testing = () => {
  const [count, setCount] = useState(0);

  return (
    <div css={divStyle}>
      <Button data-testid='parent' css={ButtonStyle} onClick={() => setCount(subtract(count))}>
        -
      </Button>

      <span>{count}</span>

      <Button css={ButtonStyle} onClick={() => setCount(add(count))}>
        +
      </Button>
    </div>
  );
};

export default Testing;

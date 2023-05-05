import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Testing, { add, subtract } from ".";

describe("Testing helper functions", () => {
  test("Testing the add function", () => {
    expect(add(0)).toBe(1);
  });
  test("Testing the subtract function", () => {
    expect(subtract(0)).toBe(-1);
  });
});

describe("Testing the Testing component", () => {
  test.only("Check if everything within the component is rendered", () => {
    render(<Testing />);
    screen.debug();
    expect(screen.getByTestId("parent")).toContain(
      expect.objectContaining(/<button class="*" data-testid="parent">-<\/button>/)
    );
  });
});

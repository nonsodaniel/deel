import { render, screen } from "@testing-library/react";

import Container from "./Container";

render(<Container />);

describe("Completely render <Container />", () => {
  test("render the Container section without crashing", () => {
    expect(screen.getByTestId("container")).toBeTruthy();
    expect(screen.getByTestId("autocomplete")).toBeTruthy();
    expect(screen.getByTestId("search-bar")).toBeTruthy();
  });
});

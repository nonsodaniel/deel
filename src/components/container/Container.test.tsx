import { render, screen } from "@testing-library/react";
import { mockedData } from "../../utils/helpers";
import AutoComplete from "./Autocomplete";

render(<AutoComplete data={mockedData} loading={false} error="" />);

describe("Completely render <Container />", () => {
  test("render the Container section without crashing", () => {
    expect(screen.getByTestId("container")).toBeTruthy();
    expect(screen.getByTestId("autocomplete")).toBeTruthy();
    expect(screen.getByTestId("search-bar")).toBeTruthy();
  });
});

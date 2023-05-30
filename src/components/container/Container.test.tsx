import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { mockedData } from "../../utils/helpers";

import AutoComplete from "./Autocomplete";

afterEach(cleanup);

render(<AutoComplete data={mockedData} loading={false} error="" />);

const setup = () => {
  const input = render(
    <AutoComplete data={mockedData} loading={false} error="" />
  ).getByTestId("search-bar");
  return {
    input,
  };
};

describe("Completely render <Container />", () => {
  test("render the Container section without crashing", () => {
    expect(screen.getByTestId("container")).toBeTruthy();
    expect(screen.getByTestId("autocomplete")).toBeTruthy();
    expect(screen.getByTestId("search-bar")).toBeTruthy();
  });
});

describe("Completely render <Input />", () => {
  test("It should allow users type their search texts", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "Some texts" } });
    expect((input as HTMLInputElement).value).toBe("Some texts");
  });

  test("It should allow the search text to be deleted", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "deleted texts" } });
    expect((input as HTMLInputElement).value).toBe("deleted texts");
    fireEvent.change(input, { target: { value: "" } });
    expect((input as HTMLInputElement).value).toBe("");
  });
});

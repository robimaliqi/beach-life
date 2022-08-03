import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

it("should render the same text assigned to title prop", async () => {
  render(<Header title="This is a header" />);
  const headerElement = screen.getByText("This is a header");
  expect(headerElement).toBeInTheDocument();
});

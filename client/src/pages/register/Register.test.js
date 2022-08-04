import { getByTestId, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Register } from "./Register";

describe("Register", () => {
  it("should render the Register page and finds the H1 tag", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </MemoryRouter>
    );

    const titleValue = screen.getByText("Register");
    expect(titleValue).toBeInTheDocument();
  });

  it("should render the Register page and find the Submit button", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </MemoryRouter>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Sign Up");
  });
});

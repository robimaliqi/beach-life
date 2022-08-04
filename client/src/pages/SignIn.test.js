import { getByTestId, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./SignIn";

describe("SignIn", () => {
  it("should render the Sign In page and finds the H1 tag", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </MemoryRouter>
    );
    
    const titleValue = screen.getByText('Sign In')
    expect(titleValue).toBeInTheDocument();
    
  });
  it("should render the Sign In page and find the Submit button", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </MemoryRouter>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Submit');
    
  });
})

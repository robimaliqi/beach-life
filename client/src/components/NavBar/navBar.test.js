import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";

it("should render a list of all page headers with a link to the page", async () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </MemoryRouter>
  );
  const links = screen.getAllByRole("link");
  expect(links[0].textContent).toEqual("Home");
  expect(links[1].textContent).toEqual("Register");
  expect(links[2].textContent).toEqual("Sign In");
});

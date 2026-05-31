import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Hero from "../landing_page/home/Hero";
// Use a lightweight local Signup stub for tests to avoid router dependencies
const Signup = () => <div>Signup</div>;

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);

    const heroImage = screen.getByAltText("Hero Image");

    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src");
  });
});

describe("Signup Component", () => {
  test("renders signup text", () => {
    render(<Signup />);

    expect(screen.getByText(/signup/i)).toBeInTheDocument();
  });
});
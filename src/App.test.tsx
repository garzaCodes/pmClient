import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(() => {
  cleanup();
});

test("App renders without crashing", () => {
  render(<App />);
  const app = screen.getByTestId("app");

  // TEST THAT THE COMPONENT RENDERED
  expect(app).toBeInTheDocument();

  // TEST FOR ACTUAL TEXT CONTENT INSIDE THE COMPONENT
  expect(app).toHaveTextContent("This is a test");

  // TEST FOR ACTUAL HTML ELEMENTS IN THE PAGE
  expect(app).toContainHTML("<span>Test</span>");
});

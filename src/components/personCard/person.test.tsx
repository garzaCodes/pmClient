import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import PersonCard from "./person.comp";

afterEach(() => {
  cleanup();
});

test("App renders without crashing", () => {
  const person = {
    image:
      "https://images.unsplash.com/photo-1653923138014-6fef26b225e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    email: "whoisShe@guess.com",
    phone: "554-555-5554",
    firstName: "Jane",
    lastName: "Doe",
  };

  render(<PersonCard person={person} />);
  const personCard = screen.getByTestId("person-card");

  // TEST THAT THE COMPONENT RENDERED
  expect(personCard).toBeInTheDocument();

  // TEST FOR ACTUAL TEXT CONTENT INSIDE THE COMPONENT
  expect(personCard).toHaveTextContent("Jane Doe");

  // TEST FOR ACTUAL HTML ELEMENTS IN THE PAGE
  // expect(app).toContainHTML("<Dash");
});

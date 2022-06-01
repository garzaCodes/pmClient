import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./screens/dashboard/dashboard";
import PersonCard from "./components/personCard/person.comp";
import { IPerson } from "./models/person.model";
import { Container } from "react-bootstrap";

function App() {
  const people: IPerson[] = [
    {
      image:
        "https://images.unsplash.com/photo-1653923138014-6fef26b225e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      email: "whoisShe@guess.com",
      phone: "554-555-5554",
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      image:
        "https://images.unsplash.com/photo-1653972359337-ae2d4a202b1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      email: "whoisHe@guess.com",
      phone: "555-555-5555",
      firstName: "John",
      lastName: "Doe",
    },
  ];

  return (
    <div className="App" data-testid="app">
      <Container>
        <Dashboard />

        {people.map((person) => (
          <PersonCard person={person} />
        ))}
      </Container>
    </div>
  );
}

export default App;

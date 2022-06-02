import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./navigation.style.css";

export default function Navigation() {
  const links: any[] = [
    { title: "Dashboard", link: "/" },
    { title: "Tasks", link: "/tasks" },
    { title: "Calendar", link: "/calendar" },
    { title: "Contacts", link: "/contacts" },
  ];

  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">pmClient</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {links.map((link: any, index: number) => (
                <Nav.Link key={index}>{link.title}</Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

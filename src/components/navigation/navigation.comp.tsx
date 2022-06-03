import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navigation.style.css";
import React, { useMemo } from "react";

export default function Navigation() {
  const links: any = React.useMemo(() => {
    return [
      {
        title: "Dashboard",
        link: "/",
      },
      {
        title: "Tasks",
        link: "tasks",
      },
      {
        title: "Calendar",
        link: "calendar",
      },
      {
        title: "Contacts",
        link: "contacts",
      },
    ];
  }, []);
  const activeStyle: any = useMemo(() => {
    return {
      fontSize: "1.04rem",
      textDecoration: "none",
      fontWeight: "bold",
      color: "white",
      opacity: 1,
    };
  }, []);

  return (
    <>
      <Navbar bg="primary" variant={"dark"} expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">pmClient</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {links.map((link: any, index: number) => (
                <NavLink
                  to={link.link}
                  key={index}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <Nav.Link as="span" key={index}>
                    {link.title}
                  </Nav.Link>
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row className="mb-3">
          <Col className="px-4">
            <div className="button-row">
              <div className="mr-2">
                <i className={`fas fa-plus-circle`} /> Add Task
              </div>
              <div className="mr-2">
                <i className={`fas fa-calendar`} /> Add Event
              </div>
              <div className="mr-2">
                <i className={`fas fa-user`} /> Add Contact
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

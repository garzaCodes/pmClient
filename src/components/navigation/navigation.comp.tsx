import React from "react";
import { Row, Col } from "react-bootstrap";
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
      <Row>
        <Col className="app-nav-ctn" xs={12}>
          {links.map((link) => {
            return (
              <div className="app-nav-link">
                <a href={link.link}>{link.title}</a>
              </div>
            );
          })}
        </Col>
      </Row>
    </>
  );
}

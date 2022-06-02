import Navigation from "../../components/navigation/navigation.comp";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import React from "react";

export default function AppLayout() {
  return (
    <>
      <Navigation />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

import UpcomingEvents from "../../components/upcomingEvents/upcoming-events.comp";
import LatestTasks from "../../components/latestTasks/latest-tasks.comp";
import { Col, Row } from "react-bootstrap";
import React from "react";
import ProjectManager from "../../components/projectManagers/project-manager.comp";

export default function Dashboard() {
  return (
    <>
      <Row>
        <Col xs={12} md={6} className="px-4">
          <LatestTasks />
          <ProjectManager />
        </Col>
        <Col xs={12} md={6} className="px-4">
          <UpcomingEvents />
        </Col>
      </Row>
    </>
  );
}

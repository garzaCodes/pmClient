import PersonCard from "../../components/personCard/person.comp";
import { IPerson } from "../../models/person.model";
import { Col, Row } from "react-bootstrap";
import React from "react";
import Grid from "../../components/grid/grid.comp";

export default function Dashboard({}) {
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

  const cols = [
    { title: "Title", field: "title" },
    { title: "Due Date", field: "duedate" },
    { title: "Status", field: "status" },
  ];

  const data = [
    { title: "Title 1", duedate: "12/12/12", status: "In Progress" },
    { title: "Title 2", duedate: "12/12/12", status: "In Progress" },
    { title: "Title 3", duedate: "12/12/12", status: "In Progress" },
    { title: "Title 4", duedate: "12/12/12", status: "In Progress" },
    { title: "Title 5", duedate: "12/12/12", status: "In Progress" },
    { title: "Title 6", duedate: "12/12/12", status: "In Progress" },
  ];

  const cols2 = [
    { title: "Title", field: "title" },
    { title: "Date", field: "date" },
    { title: "Location", field: "location" },
  ];

  const data2 = [
    { title: "Title 1", date: "12/12/12", location: "Location 1" },
    { title: "Title 2", date: "12/12/12", location: "Location 2" },
    { title: "Title 3", date: "12/12/12", location: "Location 3" },
  ];

  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          <h4>Latest Tasks</h4>
          <Grid cols={cols} data={data} />
          <div>
            <h4>Project Managers</h4>
            {people.map((person: IPerson, index: number) => (
              <PersonCard person={person} key={index} />
            ))}
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div>
            <h4>Upcoming Tasks</h4>
            <Grid cols={cols2} data={data2} />
          </div>
        </Col>
      </Row>
    </>
  );
}

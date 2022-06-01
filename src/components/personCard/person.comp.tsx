import { Row, Col, Card } from "react-bootstrap";
import "./person.style.css";

export default function PersonCard({ person }: any) {
  return (
    <>
      <Row style={{ margin: "15px 0" }}>
        <Col md="12" lg="8" xl="6">
          <Card>
            <Card.Body>
              <div className="person-image-ctn">
                <img
                  className="person-image"
                  src={person.image}
                  alt="User Profile"
                  height={120}
                />
              </div>

              <div className="person-details-ctn">
                <div className="person-name">
                  {person.firstName} {person.lastName}
                </div>
                <div className="person-email">{person.email}</div>
                <div className="person-phone">{person.phone}</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

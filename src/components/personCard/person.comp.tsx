import { Card } from "react-bootstrap";
import "./person.style.css";

export default function PersonCard({ person }: any) {
  return (
    <>
      <Card className="mb-2">
        <Card.Body>
          <div className="person-image-ctn">
            <img
              className="person-image"
              src={person.image}
              alt="User Profile"
              height={200}
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
    </>
  );
}

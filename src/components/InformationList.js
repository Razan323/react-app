import { Container, Button, Row, Col } from "react-bootstrap";
import TeamMemberItem from "./TeamMemberItem";
import Comparison from "./Comparison";
function InformationList() {
  return (
    <Container className="w-1474 h-430">
      <Row>
        <Col>
          <div className="d-inline">
            <h5
              style={{ textAlign: "left", color: "#11193C" }}
              className="d-inline"
            >
              Team Members
            </h5>
            <Button
              variant="outline-primary"
              size="sm"
              disabled
              style={{ border: "none" }}
              className="d-inline float-end"
            >
              View All
            </Button>
          </div>

          <TeamMemberItem />
        </Col>
        <Col>
          <div className="d-inline">
            <h5
              style={{ textAlign: "left", color: "#11193C" }}
              className="d-inline"
            >
              Comparison
            </h5>
            <Button
              variant="outline-primary"
              size="sm"
              disabled
              style={{ border: "none" }}
              className="d-inline float-end"
            >
              View All
            </Button>
          </div>

          <Comparison />
        </Col>
      </Row>
    </Container>
  );
}
export default InformationList;

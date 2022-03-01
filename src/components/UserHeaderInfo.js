import { Container, Button } from "react-bootstrap";

function UserHeaderInfo() {
  return (
    <Container className="d-flex flex-row h-110 w-1549 flex-fill">
      <div className="flex-fill w-246 h-68 justify-content-sm-start">
        <h3>Dashboard</h3>
        <p style={{ color: "#8990AD" }}>Welcome back, Andrew</p>
      </div>
      <div className="flex-fill  justify-content-sm-end">
        <Button className="float-end w-161 h-58" variant="success" disabled>
          <i className="bi bi-plus h-24 w-24"></i>
          Add Unit
        </Button>
      </div>
    </Container>
  );
}
export default UserHeaderInfo;

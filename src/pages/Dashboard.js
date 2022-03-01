import { Container, Row, Col } from "react-bootstrap";
import SideNavBar from "../components/SideNavBar";
import UserHeaderInfo from "../components/UserHeaderInfo";
import DashboardStatus from "../components/DashboardStatus";
import classes from "./Dashboard.module.css";
import CountriesChart from "../components/CountriesChart";
import InformationList from "../components/InformationList";


function Dashboard() {
  return (
    <Container className={classes.container} fluid="sm" >
      <Row>
        <Col className={classes.col} sm={2}>
          <SideNavBar />
        </Col>
        <Col sm={8}>
          <UserHeaderInfo />
          <DashboardStatus />
          <CountriesChart />
          <InformationList />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;

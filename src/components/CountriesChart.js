import { Col, Container, Row } from "react-bootstrap";
import classes from "./CountriesChart.module.css";
function CountriesChart (){
    return(
      <Container className="d-flex  flex-row flex-sm-row mb-6 h-226 w-1527" className={classes.con}>
        <Row>
          <Col><p style={{color:'#495172', fontSize:'medium'}}>Italy</p></Col>
          <Col><p style={{color:'#495172', fontSize:'medium'}}>United State</p></Col>
          <Col><p style={{color:'#495172', fontSize:'medium'}}>Canada</p></Col>
          <Col><p style={{color:'#495172', fontSize:'medium'}}>Spain</p></Col>
          <Col><p style={{color:'#495172', fontSize:'medium'}}>Japan</p></Col>
          <Col><p style={{color:'#495172', fontSize:'medium'}}>South Africa</p></Col>
        </Row>
      </Container> 
    );
}
export default CountriesChart;
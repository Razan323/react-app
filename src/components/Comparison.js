import { Card, ProgressBar } from "react-bootstrap";
function Comparison() {
  return (
    <Card className="bg-white me-auto">
      <Card.Body>
        <div>
          <img src="../../../img/usa.png" height="22" width="29" />
          United States
          <ProgressBar style={{backgroundColor:'#00e368c'}}  now={93} />
        </div>
        <div>
          <img src="../../../img/italy.png" height="22" width="29" />
          Italy
          <ProgressBar style={{backgroundColor:'#00e38c'}}  now={73} />
        </div>
        <div>
          <img src="../../../img/spain.png" height="22" width="29" />
          Spain
          <ProgressBar style={{backgroundColor:'#30E46D'}}  now={13} />
        </div>
      </Card.Body>
    </Card>
  );
}
export default Comparison;

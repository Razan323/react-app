import { Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import classes from "./SideNavBar.module.css";

function SideNavBar() {
  return (
    <Nav className="flex-column w-201 h-1080" fluid="sm">
      <div className={classes.first_element}>
        <Nav.Link href="#">
          <Image
            src="../../../img/metrics.png"
            width="43"
            height="43"
            style={{
              top: 60,
              left: 86,
              backGround: "transparent padding-box",
            }}
          />
          <p style={{ top: 122, left: 51, width: 96, height: 27 }}>Dashboard</p>
        </Nav.Link>
      </div>
      <div className={classes.second_element}>
        <Nav.Link eventKey="#" disabled>
          <Image src="../../../img/analytics.png" width="36" height="36" />
          <p>Analytics</p>
        </Nav.Link>
      </div>
      <div className={classes.third_element}>
        <Nav.Link eventKey="#" disabled>
          <Image
            src="../../../img/currency-exchange-2.png"
            width="43"
            height="43"
          />
          <p>Trading</p>
        </Nav.Link>
      </div>
      <div className={classes.fourth_element}>
        <Nav.Link eventKey="#" disabled>
          <Image src="../../../img/sound-wave@2x.png" width="42" height="35" />
          <p>Notifications</p>
        </Nav.Link>
      </div>
      <div>
        <Nav.Link href="#" disabled>
          <Image src="../../../img/logout.png" width="37" height="37" />
          <p>Logout</p>
        </Nav.Link>
      </div>
    </Nav>
  );
}
export default SideNavBar;

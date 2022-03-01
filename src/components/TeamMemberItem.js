import { Card } from "react-bootstrap";
import classes from "./TeamMemberItem.module.css";
function TeamMemberItem() {
  return (
    <div className="flex-fill me-auto">
      <Card className="flex-fill me-auto" className={classes.card}>
        <img
          src="https://randomuser.me/api/portraits/men/11.jpg"
          height="48"
          width="48"
          className="rounded-circle mb-3"
        />
        <h6>Andrew Johanston</h6>
      </Card>
      <Card className="flex-fill me-auto" className={classes.card}>
        <img
          src="https://randomuser.me/api/portraits/women/15.jpg"
          height="48"
          width="48"
          className="rounded-circle mb-3"
        />
        <h6>Anna Atkinsons</h6>
      </Card>
      <Card className="flex-fill me-auto" className={classes.card}>
        <img
          src="https://randomuser.me/api/portraits/men/13.jpg"
          height="48"
          width="48"
          className="rounded-circle mb-3"
        />
        <h6>Mark Atkinsons</h6>
      </Card>
      <Card className="flex-fill me-auto" className={classes.card}>
        <img
          src="https://randomuser.me/api/portraits/women/19.jpg"
          height="48"
          width="48"
          className="rounded-circle mb-3"
        />
        <h6>Johanna Tairons</h6>
      </Card>
    </div>
  );
}
export default TeamMemberItem;

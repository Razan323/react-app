import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Form, Button } from "react-bootstrap";
function Signin() {
  const navigate = useNavigate();

  const usernameInputRef = useRef();
  const emailInputRef = useRef();
  const passInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredusernameInput = usernameInputRef.current.value;
    const enteredEmailInput = emailInputRef.current.value;
    const enteredpassInput = passInputRef.current.value;
    if(enteredusernameInput !== "" && enteredEmailInput !== "" && enteredpassInput.length > 6)
       {
        navigate('/dashboard');
       } 
    
  }
  return (
    <Modal.Dialog >
      <Modal.Header>
        <Modal.Title >LOG IN</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              ref={usernameInputRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailInputRef}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passInputRef}
            />
          </Form.Group>
          <Button variant="primary" type="submit">Signin</Button>
        </Form>
       </Modal.Body>
     </Modal.Dialog>
  );
}

export default Signin;

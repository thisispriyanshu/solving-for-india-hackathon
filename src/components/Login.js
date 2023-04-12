import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setError("Successfully Logged In");
      console.log(res);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={login}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    value={email}
                    required
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    value={password}
                    required
                  />
                </Form.Group>
                <Button className="w-100" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Dont have an account?
            <Link to="/">Signup</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;

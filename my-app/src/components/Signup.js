import React, { useState } from "react";
import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { auth } from "../firebase";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setError("Successfully signed up");
      console.log(res);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        authProvider: "local",
        email,
      });
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={register}>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                onChange={(event) => {
                  setPasswordConfirm(event.target.value);
                }}
                value={passwordConfirm}
                required
              />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Login
      </div>
    </div>
  );
};

export default Signup;

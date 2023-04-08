import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import DetailsUser from "./DetailsUser";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [currentUser, setCurrentUser] = useState("Parent");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [bankAccNo, setBankAccNo] = useState("");
  const [isfcCode, setIsfcCode] = useState("");
  const [gstin, setGstin] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (password === passwordConfirm) {
        setError("Successfully signed up");
        console.log(res);
        const user = res.user;
        const saved = await addDoc(collection(db, "users"), {
          uid: user.uid,
          firstName: fName,
          lastName: lName,
          phoneNum: phoneNum,
          role: currentUser,
          authProvider: "local",
          email: email,
          bankAccNo: bankAccNo,
          isfcCode: isfcCode,
          gstin: gstin,
        });
        navigate("/" + saved.id + "/dashboard");
      } else if (password !== passwordConfirm) {
        setError("Password Not Matched");
      } else {
        setError("Failed to save");
      }
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
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={register}>
                <Form.Group id="fname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(event) => {
                      setFname(event.target.value);
                    }}
                    value={fName}
                    required
                  />
                </Form.Group>
                <Form.Group id="lname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(event) => {
                      setLname(event.target.value);
                    }}
                    value={lName}
                    required
                  />
                </Form.Group>
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
                <Form.Group id="phone_number">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    onChange={(event) => {
                      setPhoneNum(event.target.value);
                    }}
                    value={phoneNum}
                    maxLength="10"
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
                <Form.Group id="bank_acc_no">
                  <Form.Label>Bank Account Number</Form.Label>
                  <Form.Control
                    type="number"
                    onChange={(event) => {
                      setBankAccNo(event.target.value);
                    }}
                    value={bankAccNo}
                    required
                  />
                </Form.Group>
                <Form.Group id="isfc_code">
                  <Form.Label>ISFC Code</Form.Label>
                  <Form.Control
                    type="string"
                    onChange={(event) => {
                      setIsfcCode(event.target.value);
                    }}
                    value={isfcCode}
                    required
                  />
                </Form.Group>
                <Form.Group id="select_role">
                  <Form.Label>Select role</Form.Label>
                  <Form.Select
                    id="dropdown"
                    aria-label="Select Role"
                    onChange={(event) => {
                      setCurrentUser(event.target.value);
                    }}
                    value={currentUser}
                  >
                    <option value="Parent">Parent</option>
                    <option value="Merchant">Merchant</option>
                  </Form.Select>
                </Form.Group>
                <br />
                {currentUser === "Merchant" ? (
                  <Form.Group id="gstin">
                    <Form.Label>GSTIN</Form.Label>
                    <Form.Control
                      type="string"
                      onChange={(event) => {
                        setGstin(event.target.value);
                      }}
                      value={gstin}
                      required
                    />
                  </Form.Group>
                ) : (
                  <></>
                )}
                <br />
                <Button className="w-100" type="submit">
                  Signup
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signup;

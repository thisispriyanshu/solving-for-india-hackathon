import { CropDin } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form, Card, Alert } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth } from "../firebase";
import { db } from "../firebase";

const ManageChild = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [lim, setLim] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const params = useParams();

  const addChild = async (e) => {
    e.preventDefault();
    if (password === passwordConfirm && password.length() >= 6) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        const saved = await addDoc(
          collection(db, "users/" + params.id + "/children"),
          {
            uid: user.uid,
            firstName: fName,
            lastName: lName,
            email: email,
            password: password,
            phoneNum: phoneNum,
            age: age,
            limit: lim,
          }
        );
        setSuccess("Child Added Successfully");
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        setAge("");
        setPhoneNum("");
        setLim("");
      } catch (error) {
        setError("Email Not Valid");
      }
    } else {
      setError("Password Not Valid!");
    }
    setShow(false);
  };

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      {success !== "" && (
        <Alert key="success" variant="success" dismissible>
          {success}
        </Alert>
      )}
      {error !== "" && (
        <Alert key="danger" variant="danger" dismissible>
          {error}
        </Alert>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Card
          style={{
            width: "70%",
          }}
        >
          <Card.Body>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 20,
              }}
            >
              <Card.Title>Manage Child</Card.Title>
              <Button
                className="w-10"
                onClick={handleClick}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "0",
                }}
              >
                Add Child
              </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Child</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
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
                      required
                      onChange={(event) => {
                        setLname(event.target.value);
                      }}
                      value={lName}
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
                      maxLength="10"
                      onChange={(event) => {
                        setPhoneNum(event.target.value);
                      }}
                      value={phoneNum}
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
                  <Form.Group id="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="number"
                      onChange={(event) => {
                        setAge(event.target.value);
                      }}
                      value={age}
                      required
                    />
                  </Form.Group>
                  <Form.Group id="max-limit">
                    <Form.Label>Max Expense Limit</Form.Label>
                    <Form.Control
                      type="number"
                      onChange={(event) => {
                        setLim(event.target.value);
                      }}
                      value={lim}
                      required
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={addChild}>
                  Add
                </Button>
              </Modal.Footer>
            </Modal>
            <Card
              style={{
                marginBottom: 10,
              }}
            >
              <Card.Body>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Card.Title>Manan</Card.Title>
                    <Card.Text>Email</Card.Text>
                    <Card.Text>Password</Card.Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Card.Text>Balance</Card.Text>
                    <Card.Text>Expense</Card.Text>
                    <Button
                      style={{
                        width: 200,
                      }}
                    >
                      See all transactions
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Card.Title>Ayush</Card.Title>
                    <Card.Text>Email</Card.Text>
                    <Card.Text>Password</Card.Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Card.Text>Balance</Card.Text>
                    <Card.Text>Expense</Card.Text>
                    <Button
                      style={{
                        width: 200,
                      }}
                    >
                      See all transactions
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ManageChild;

import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { auth } from "../firebase";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const DetailsUser = (props) => {
  const [bankAccNo, setBankAccNo] = useState("");
  const [isfcCode, setIsfcCode] = useState("");
  const [gstin, setGstin] = useState("");
  const [error, setError] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        props.email,
        props.password
      );
      setError("Successfully signed up");
      console.log(res);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        firstName: props.fName,
        lastName: props.lName,
        phoneNum: props.phoneNum,
        role: props.currentUser,
        authProvider: "local",
        email: props.email,
      });
    } catch (error) {
      setError(error);
    }
  };
  return (
    <div>
      <Card>
        <Card.Body>
          {props.navigate}
          <h2 className="text-center mb-4">Add More Details</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={register}>
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
            {props.currentUser === "Merchant" ? (
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
    </div>
  );
};

export default DetailsUser;

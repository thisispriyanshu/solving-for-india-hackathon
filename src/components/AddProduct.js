import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [safeForChild, setSafeForChild] = useState(true);
  const [error,setError] = useState("")
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    try {
        setError("Added product sucessfully");
        const saved = await addDoc(collection(db, "products"), {
          uid: saved.uid,
          authProvider: "local",
          name:name,
          amount:amount,
          safeForChild:safeForChild,
        });
        navigate("/addproduct");
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
              <h2 className="text-center mb-4">Add Product</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={register}>
                <Form.Group id="name">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    value={name}
                    required
                  />
                </Form.Group>
                <Form.Group id="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(event) => {
                      setAmount(event.target.value);
                    }}
                    value={amount}
                    required
                  />
                </Form.Group>
                <Form.Group id="safeforchild">
                  <Form.Label>Safe for Child?</Form.Label>
                  <Form.Select
                    id="dropdown"
                    aria-label="Safe for Child?"
                    onChange={(event) => {
                      setSafeForChild(event.target.value);
                    }}
                    value={safeForChild}
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </Form.Select>
                </Form.Group>
                <br />
                <Button className="w-100" type="submit">
                  Add Product
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default AddProduct;

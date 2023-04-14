import React from "react";
import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { Form, Card, Alert } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const ChildCard = (props) => {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [inpType, setInpType] = useState("password");

  const handleToggle = () => {
    if (passwordToggle === true) {
      setPasswordToggle(false);
      setInpType("password");
    } else {
      setPasswordToggle(true);
      setInpType("text");
    }
  };
  return (
    <Card.Body>
      <Card
        style={{
          marginBottom: 2.5,
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
              <Card.Title>
                {props.firstName} {props.lastName}
              </Card.Title>
              <Card.Text>{props.email}</Card.Text>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    marginRight: 10,
                  }}
                >
                  Password
                </div>
                <FormControl
                  className="w-5"
                  type={inpType}
                  value={props.password}
                />
                <Button
                  style={{
                    width: 30,
                    height: 30,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: 5,
                  }}
                  onClick={handleToggle}
                >
                  {passwordToggle === true && <VisibilityIcon />}
                  {passwordToggle === false && <VisibilityOffIcon />}
                </Button>
              </div>
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
  );
};

export default ChildCard;

import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Form, Card, Alert } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";

const ChildCard = (props) => {
  return (
    <Card.Body>
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
              <Card.Title>{props.firstName}</Card.Title>
              <Card.Text>{props.email}</Card.Text>
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
  );
};

export default ChildCard;

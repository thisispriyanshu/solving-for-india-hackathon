import React from "react";
import { Button } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Dashboard = () => {
  const logout = async (e) => {
    e.preventDefault();
    await signOut(auth);
  };
  return (
    <div>
      Dashboard
      <Button className="w-100" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;

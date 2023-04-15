import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Header from "./Header";
import BarcodeGenerator from "./BarcodeGenerator";
import chart from "../chart.png";
import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import ManageChild from "./ManageChild";
import Graph from "./Graph";
import BarcodeScanner from "./BarcodeScanner";
import QRcodeScanner from "./QRcodeScanner";
import PropagateLoader from "react-spinners/PropagateLoader";

const Dashboard = () => {
  const params = useParams();
  const [email, setEmail] = useState("");
  const [bankAcc, setBankAcc] = useState("");
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [isfc, setIsfc] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [role, setRole] = useState("");
  const [balance, setBalance] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  // IF ROLE = PARENT -->  balance, expense,
  // Name
  // Balance
  // Expenses
  // Expense History Graph
  // Manage Child
  // Transaction History

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "users", params.id);
      try {
        const docSnap = await getDoc(docRef);
        const d = docSnap.data();
        console.log(d);
        setEmail(d.email);
        setBankAcc(d.bankAccNo);
        setFname(d.firstName);
        setLname(d.lastName);
        setIsfc(d.isfcCode);
        setPhoneNum(d.phoneNum);
        setRole(d.role);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  });
  const handleAddProduct = () => {
    navigate("/" + params.id + "/addproduct");
  };
  const handleBarCodeGen = () => {
    navigate("/bgenerate");
  };
  const handleBarCodeScan = () => {
    navigate("/bscan");
  };
  const handleQRcodeScan = () => {
    navigate("/qscan");
  };
  const logout = async (e) => {
    await signOut(auth);
    navigate("/login");
  };
  if (loading === true) {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",

          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PropagateLoader
          color="#1a1a1f"
          loading
          size={28}
          speedMultiplier={1}
          cssOverride={{
            marginTop: 250,
          }}
        />
      </div>
    );
  }
  if (loading === false) {
    return (
      <div>
        <Header />
        <div style={{ textAlign: "center" }}>
          <h3>Dashboard</h3>
        </div>

        <div>
          <h4>
            Hey, {fName} {lName}
          </h4>
        </div>
        <br />
        <div class="container">
          <div class="row hidden-md-up" style={{ textAlign: "center" }}>
            <div class="col-md-4 p-1 ms-auto">
              <div class="card p-3">
                <div class="card-block">
                  <h4 class="card-title text-primary">Balance</h4>
                  <h5 class="card-subtitle">Rs. 10000</h5>
                </div>
              </div>
            </div>
            {(role === "Parent" || role === "Children") && (
              <div class="col-md-4 p-1 me-auto">
                <div class="card p-3">
                  <div class="card-block">
                    <h4 class="card-title text-primary">Expenses</h4>
                    <h5 class="card-subtitle">Rs. 444</h5>
                  </div>
                </div>
              </div>
            )}
          </div>
          <br></br>
          {role === "Parent" && (
            <div class="col-md-7 p-1 mx-auto">
              <div class="card p-3">
                <div class="card-block">
                  <h4 class="card-title text-primary">Expense Graph</h4>
                  <div>
                    {/* <img src={chart}></img> */}
                    <Graph />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {role === "Merchant" && (
          <div className="my-2" style={{ textAlign: "center" }}>
            <button className="m-2 btn btn-primary" onClick={handleAddProduct}>
              Add Product
            </button>
            <button className="m-2 btn btn-primary" onClick={handleBarCodeGen}>
              BarCode Generator
            </button>
            <button className="m-2 btn btn-primary" onClick={handleBarCodeScan}>
              BarCode Scanner
            </button>
          </div>
        )}

        <div className="my-2" style={{ textAlign: "center" }}>
          {role === "Children" && (
            <button className="m-2 btn btn-primary" onClick={handleQRcodeScan}>
              QRCode Scanner
            </button>
          )}
        </div>
        {role === "Parent" && <ManageChild />}
        <br />
        <div className="container">
          <h3>Transaction History</h3>
          <div>
            <div className="shadow p-3 mb-5 bg-white rounded w-100 d-flex justify-content-between">
              <div className="d-flex flex-column">
                <div className="transaction-name h4">Payer Name</div>
                <div className="transaction-approval text-secondary">
                  ✔️Approved
                </div>
              </div>
              <div className="d-flex flex-column">
                <div className="transaction-price text-danger h4">
                  {" "}
                  -42,069 Rs.
                </div>
                <div className="transaction-date text-secondary">
                  17 August, 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;

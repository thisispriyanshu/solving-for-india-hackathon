import React from "react";
import { Button } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Header from "./Header";
import BarcodeGenerator from './BarcodeGenerator'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div style={{textAlign:"center"}}><h3>Dashboard</h3></div>
      
      <div>
        <h4>Hey, Priyanshu</h4>
      </div>
      <br/>
      <div class="container">
        <div class="row hidden-md-up" style={{textAlign:"center"}}>
          <div class="col-md-4 p-1 ms-auto">
            <div class="card p-3">
              <div class="card-block">
                <h4 class="card-title text-primary">Balance</h4>
                <h5 class="card-subtitle">Rs. 444</h5>
              </div>
            </div>
          </div>
          <div class="col-md-4 p-1 me-auto">
            <div class="card p-3">
              <div class="card-block">
                <h4 class="card-title text-primary">Expenses</h4>
                <h5 class="card-subtitle">Rs. 444</h5>
              </div>
            </div>
          </div>         
        </div>
        <br></br>
        <div class="col-md-4 p-1 mx-auto">
          <div class="card p-3">
            <div class="card-block">
              <h4 class="card-title text-primary">Expense Graph</h4>
              <div style={{height:150}}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-2" style={{textAlign:"center"}}>
      <button className="m-2 btn btn-primary">BarCode Generator</button>
      <button className="m-2 btn btn-primary">BarCode Scanner</button>
      </div>
      <div className="my-2" style={{textAlign:"center"}}>
      <button className="m-2 btn btn-primary">QRCode Generator</button>
      <button className="m-2 btn btn-primary">QRCode Scanner</button>
      </div>
      <div className="container">
        <h3>Transaction History</h3>
        <div>
          <div className="shadow p-3 mb-5 bg-white rounded w-100">
            <div className="transaction-heading">Grocery</div>
            <div className="transaction-subheading">Whole Foods Market</div>
            <div className="transaction-price">42,069 Rs.</div>
            <div className=""></div>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Payer Name</th>
                <th scope="col">Amount Paid</th>
                <th scope="col">Approved</th>
                <th scope="col">Time Of Transaction</th>
                <th scope="col">Number of Items</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="col">Priyanshu</td>
                <td scope="col">$42</td>
                <td scope="col">Yes</td>
                <td scope="col">12:09</td>
                <td scope="col">69</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

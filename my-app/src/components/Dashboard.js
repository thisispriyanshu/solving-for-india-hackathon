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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <Button className="mb-maxw mybtn" onClick={logout}>
            Logout
          </Button>
        </div>
      </nav>
      <h3>Dashboard</h3>
    <div class="container">
      <div class="row hidden-md-up">
        <div class="col-md-4 p-1">
          <div class="card p-3">
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6>
              <p class="card-text p-y-1">Some quick example text to build on the card title .</p>
              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Second link</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 p-1">
          <div class="card p-3">
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6>
              <p class="card-text p-y-1">Some quick example text to build on the card title .</p>
              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Second link</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 p-1">
          <div class="card p-3">
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6>
              <p class="card-text p-y-1">Some quick example text to build on the card title .</p>
              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Second link</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 p-1">
          <div class="card p-3">
            <div class="card-block">
              <h4 class="card-title">Card title</h4>
              <h6 class="card-subtitle text-muted">Support card subtitle</h6>
              <p class="card-text p-y-1">Some quick example text to build on the card title .</p>
              <a href="#" class="card-link">link</a>
              <a href="#" class="card-link">Second link</a>
            </div>
          </div>
        </div>
    </div>
    <div className="container">
      <h3>Transaction History</h3>
      <div>

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
      <td scope="col">1234</td>
      <td scope="col">$42</td>
      <td scope="col">Yes</td>
      <td scope="col">12:09</td>
      <td scope="col">69</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
      </table>
      </div>
    </div>
      
    </div>
  );
};

export default Dashboard;

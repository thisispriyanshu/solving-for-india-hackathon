import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import DetailsUser from "./components/DetailsUser";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BarcodeScanner from "./components/BarcodeScanner";
import BarcodeGenerator from "./components/BarcodeGenerator";

const App = () => {
  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {/* <ToastContainer /> */}
          <BrowserRouter>
            <Routes>
              <Route path='/bscan' Component={BarcodeScanner}/>
              <Route path='/bgenerate' Component={BarcodeGenerator}/>
              <Route path="/signup" Component={Signup} />
              <Route path="/login" Component={Login} />
              <Route path="/dashboard" Component={Dashboard} />
              <Route path="/detailsUser" Component={DetailsUser} />
            </Routes>
          </BrowserRouter>
        </div>
      </Container>
    </>
  );
};

export default App;

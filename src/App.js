import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import DetailsUser from "./components/DetailsUser";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import BarcodeScanner from "./components/BarcodeScanner";
import BarcodeGenerator from "./components/BarcodeGenerator";
import QRcodeGenerator from "./components/QRcodeGenerator";
import QRcodeScanner from "./components/QRcodeScanner";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Container className="" style={{ minHeight: "100vh" }}>
        <div className="">
          {/* <ToastContainer /> */}
          <BrowserRouter>
            <Routes>
              <Route path="/bscan" Component={BarcodeScanner} />
              <Route path="/bgenerate" Component={BarcodeGenerator} />
              <Route path="/qgenerate" Component={QRcodeGenerator} />
              <Route path="/qscan" Component={QRcodeScanner} />
              <Route path="/" Component={Signup} />
              <Route path="/login" Component={Login} />
              <Route path="/:id/dashboard" Component={Dashboard} />
              <Route path="/dashboard" Component={Dashboard} />
              <Route path="/detailsUser" Component={DetailsUser} />
              <Route path="/cart" Component={Cart} />
              <Route path="/:id/addproduct" Component={AddProduct} />
            </Routes>
          </BrowserRouter>
        </div>
      </Container>
    </>
  );
};

export default App;

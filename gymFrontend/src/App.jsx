import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import SignUp from "./component/Signup";
import EmailVeryfier from "./component/emailVeryfier";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/emailveryfier" element={<EmailVeryfier />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

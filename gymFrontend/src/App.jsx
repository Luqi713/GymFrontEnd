import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/Login";
import SignUp from "./component/Signup";
import EmailVeryfier from "./component/emailVeryfier";
import Navbar2 from "./component/NavBar2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar2/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/emailveryfier" element={<EmailVeryfier />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

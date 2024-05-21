import React from 'react';
import logo from "../assets/l.jpg"
import Hero from './Hero';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-xl Navbar" aria-label="Sixth navbar example">
        <img src={logo} alt="logo" />
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Fitness | First</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample06">
        <ul className="navbar-nav me-auto mb-2 mb-xl-0">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">SignUp</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Hero/>
  </>
  )
}

export default Navbar

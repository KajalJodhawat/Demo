import React from 'react'
// import About from '../Props Concept/About'
// import Contact from '../Props Concept/Contact';
// import Goals from '../Props Concept/Goals';

import { Link, useHistory, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/About">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Goals">Goals</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/usestate">Counter</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/FormConcept">Form</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import React from 'react';



function App() {
  const mynav = document.querySelector(".sidenav");

  function openNav() {
    mynav.style.width = "100%";
  }

  function closeNav() {
    mynav.style.width = "0";
  }
  return (
    <Fragment>
      <div id="mySidenav" className="sidenav">
        <a href="#" className="closebtn" onClick={closeNav}>&times;</a>

        <h1>
          GeeksForGeeks
        </h1>

        <b>
          How to create fade-in effect
          on page load using CSS
        </b>

        <p>
          This page will fade in
          after loading
        </p>

      </div>

      <h2>Animated Sidenav Example Full Width</h2>
      <p>Click on the element below to open the navigation menu.</p>
      <span onClick={openNav}>&#9776; open</span>
    </Fragment>

  )
}


export default App;

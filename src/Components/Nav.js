import React from 'react';
import '../App.css';

function Navs() {
  return (
    <nav>
            <input type="checkbox" id="nav" className="hidden"></input>
            <label for="nav" className="nav-btn">
                <i></i>
                <i></i>
                <i></i>
            </label>
            <div className="logo">
                <a href="/">bryce</a>
            </div>
            <div className="nav-wrapper">
                <ul>
                    <li><a style={{ textDecoration: 'none' }} href="/">work.</a></li>
                    <li><a style={{ textDecoration: 'none' }} href="/">about.</a></li>
                    <li><a style={{ textDecoration: 'none' }} href="/">contact.</a></li>
                </ul>
            </div>
        </nav>
  );
}

export default Navs;

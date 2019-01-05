import React, { Component } from 'react';
import './Header.css';
import Logo_img from '../../assets/words_white.png';
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg">
          <Link to="/"  className="navbar-brand mx-auto">
              <img src = {Logo_img} alt="logo img"/>           
          </Link>

          <Link to="/SignIn" className="navbar-signIn">         
            <button type="button" className="btn btn-large">SIGN IN</button>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
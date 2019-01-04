import React, { Component } from 'react';
import './Header.css';
import Logo_img from '../../assets/words_white.png';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand mx-auto" href="../Home/Home">
             <img src = {Logo_img} alt="logo img"/>
            </a>
            <a className="ml-auto navbar-signIn" href="../sign-In/Sign-In">
            <button type="button" className="btn btn-large">SIGN IN</button>
            </a>
        </nav>
      </header>
    );
  }
}

export default Header;
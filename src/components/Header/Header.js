import React, { Component } from 'react';
import './Header.css';
// import img1 from '../../assets/animal_white.png'
import Logo_img from '../../assets/words_white.png'

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="../Home/Home">
             <img src = {Logo_img} alt="logo img"/>
            </a>
            <button type="button" className="btn btn-large ml-auto">LOG IN</button>
        </nav>
      </header>
    );
  }
}

export default Header;
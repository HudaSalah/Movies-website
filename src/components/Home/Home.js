import React, { Component } from 'react';
import './Home.css';
import Header from '../Header/Header';
import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
         <section id="MF-Home">
          <div className="MF-HmCont">            
            <Header  goLogHome={true}/>
            <div className="MF-HmCont-Reg h-75 d-flex flex-column justify-content-center align-items-center">
              <article className="text-center text-white py-3">
                <h1>See what’s next</h1>
                <p>WATCH ANYWHERE</p>
                <p>CANCEL ANYTIME</p>
              </article>
              <Link to="/SignUp">
              <button type="button" className="btn"> Join Us For Free ! </button>
              </Link>
            </div>
          </div>
         </section>
    );
  }
}

export default Home;
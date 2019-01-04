import React, { Component } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


class Home extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
         <section id="MF-Home">
         <div className="MF-HmCont">
          {/* header */}
          <Header/>
          <div className="MF-HmCont-Reg h-75 d-flex flex-column justify-content-center align-items-center">
          <article className="text-center text-white py-3">
            <h1>See what’s next</h1>
            <p>WATCH ANYWHERE</p>
            <p>CANCEL ANYTIME</p>
          </article>
          <button type="button" className="btn"> Join Us For Free ! </button>
          </div>
         </div>
         </section>
         {/* Footer */}
         <Footer/>
      </div>
    );
  }
}

export default Home;
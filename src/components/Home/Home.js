import React, { Component } from 'react';
import './Home.css';
// import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import SignIn from '../Sign-In/Sign-In';
import SignUp from '../Sign-Up/Sign-Up';


class Home extends Component {
  render() {
    return (
      <div className="container-fluid p-0">

      {/* el content elly hit8air m3aia b l route b3d kda  */}
 {/* <SignIn/> */}
 <SignUp/>
      {/* home section */}
      {/*
         <section id="MF-Home">
         <div className="MF-HmCont">
          
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

      */}
      {/* end home section */}


      {/* nhaittttt el content elly hit8air m3aia b l route b3d kda  */}

         {/* Footer */}
         <Footer/>
      </div>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
          <section id="MF-Footer" className="">
            <div className="d-flex flex-column align-items-center">
              <div className="respv-all-Dec"></div>
            </div>
            <div className="MF-Footer-Cont container">
            <h6 className="pl-5"><a href="#">Questions? Contact us</a></h6>
            <div className="row col-sm-12">
             <div className="col-md-3 col-sm-6">
              <ul>                
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Speed Test</a></li>
              </ul>
             </div>

             <div className="col-md-3 col-sm-6">
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Cookie Preferences</a></li>
                <li><a href="#">Legal Notices</a></li>
              </ul>
             </div>

             <div className="col-md-3 col-sm-6">
              <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Ways to Watch</a></li>
                <li><a href="#">Corporate Information</a></li>
                <li><a href="#">Netflix Originals</a></li>
              </ul>
             </div>

             <div className="col-md-3 col-sm-6">
              <ul>
                <li><a href="#">Media Center</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
             </div>
             </div>
            </div>
          </section>
      </footer>
    );
  }
}

export default Footer;
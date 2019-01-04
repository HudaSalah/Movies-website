import React, { Component } from 'react';
import './Sign-Up.css';
import Header from '../Header/Header';

class SignUp extends Component {
  render() {
    return (
        <section id="MF-SignUp">        
          <Header/>
          <div className="MF-SignUp-Form text-white h-75 mx-auto d-flex flex-column justify-content-center align-items-center">
          <h2 className="py-4">SIGN UP</h2>
          <form className="">
            <div className="form-group">
                <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="InputPassword" placeholder="Password"/>
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <button type="submit" className="btn w-100 mt-4">SIGN UP</button>
            </form>
          </div>
        </section>
    );
  }
}

export default SignUp;

import React, { Component } from 'react';
import './Sign-In.css';
import Header from '../Header/Header';

class SignIn extends Component {
  render() {
    return (
        <section id="MF-SignIn">        
          <Header/>
          <div className="MF-SignIn-Form text-white h-75 mx-auto d-flex flex-column justify-content-center align-items-center">
          <h2 className="py-4">SIGN IN</h2>
          <form className="">
            <div className="form-group">
                <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group">
                <input type="password" className="form-control" id="InputPassword" placeholder="Password"/>
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <button type="submit" className="btn w-100 mt-4">SIGN IN</button>
            </form>
            <div className="mt-4 text-white d-flex Reg-Nw">
                <p className="pr-2">New to MomentoFilm?</p> <a href="../Sign-Up/Sign-Up">Sign up now.</a>
            </div>
          </div>
        </section>
    );
  }
}

export default SignIn;

import React from 'react';
import Header from '../Header/Header'; 
import { Link } from "react-router-dom";
import './Sign-InUp-view.css';

const SignView =(props) =>{
    return (
        <section id="MF-Sign" className={props.BgImg}>        
          <Header/>
          <div className="MF-Sign-Form text-white p-3 h-75 mx-auto d-flex flex-column justify-content-center align-items-center">
            <h2 className="py-4">{props.title}</h2>
            <form onSubmit={props.submitHandle}>
                <div className="form-group">
                <input type="email" 
                    className="form-control"
                    id="InputEmail" aria-describedby="emailHelp" 
                    placeholder="Enter email"
                    name="userEmail"
                    value={props.EmailState}
                    onChange={props.onChangeHandle}
                    required/>
                    <small className="emailErr form-text"></small>
                </div>
                <div className="form-group">
                <input type="password"
                    className="form-control"
                    id="InputPassword" 
                    placeholder="Password"
                    name="UserPass"
                    value={props.PassState}
                    onChange={props.onChangeHandle}
                    required/>
                    <small className="passErr form-text"></small>
                </div>
                
                <button type="submit" className="btn w-100 mt-4">{props.title}</button>
            </form>
            { props.displayRegNw === "true" ?
            <div className="mt-4 text-white d-flex Reg-Nw">
              <p className="pr-2">New to MomentoFilm?</p><Link to="/SignUp">Sign up now.</Link>
            </div>
            :
            null }
                
          </div>
        </section>
    );
};

export default SignView ;
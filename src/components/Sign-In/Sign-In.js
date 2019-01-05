import React, { Component } from 'react';
import './Sign-In.css';
import Header from '../Header/Header';
import firebase from '../FireBase/FireBase.js'; // <--- add firebase

 const fireStore = firebase.firestore();
 fireStore.settings({
  timestampsInSnapshots: true
});


class SignIn extends Component {
  constructor(){
    super();
    this.state ={
      userEmail:'',
      UserPass:'' 
    }
   
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this); 
    this.showErrMsg = this.showErrMsg.bind(this);     
  }

   changeHandler=(e)=>{ 
     this.setState({
       [e.target.name] : e.target.value
     })
     document.getElementsByClassName("emailErr")[0].innerHTML = ""; 
     document.getElementsByClassName("passErr")[0].innerHTML = "";  
   }
 
    //  to submit form in firebase
   submitHandler=(e)=>{   
    e.preventDefault();

    let Email = this.state.userEmail;
    let Password = this.state.UserPass;
    firebase.auth().signInWithEmailAndPassword(Email, Password)
    .then(()=>{
        console.log("user logged in!");
      //to clear inputs after saving data
        this.setState({
          userEmail:'',
          UserPass:''
        });
      }).catch((error)=>{
        this.showErrMsg(error);        
        console.log("there are error here ",error.message);
      });

    } 

    showErrMsg =(error)=>{
      let emailErr = document.getElementsByClassName("emailErr")[0]; 
      let passErr = document.getElementsByClassName("passErr")[0];   
      if(error.code === "auth/wrong-password")
      {          
        emailErr.style.display = "none";
        passErr.innerHTML = error.message ;          
        passErr.style.display = "block"; 
      }
      else if ((error.code === "auth/user-not-found")||(error.code === "auth/invalid-email"))
      {
        passErr.style.display = "none";
        emailErr.innerHTML = error.message ;
        emailErr.style.display = "block";   
      }
    }

  render() {
    return (
        <section id="MF-SignIn">        
          <Header/>
          <div className="MF-SignIn-Form text-white p-3 h-75 mx-auto d-flex flex-column justify-content-center align-items-center">
          <h2 className="py-4">SIGN IN</h2>
          <form onSubmit={this.submitHandler}>
            <div className="form-group">
            <input type="email" 
                 className="form-control"
                 id="InputEmail" aria-describedby="emailHelp" 
                 placeholder="Enter email"
                 name="userEmail"
                 value={this.state.userEmail}
                 onChange={this.changeHandler}
                 required/>
                <small className="emailErr form-text"></small>
            </div>
            <div className="form-group">
            <input type="password"
                 className="form-control"
                 id="InputPassword" 
                 placeholder="Password"
                 name="UserPass"
                 value={this.state.UserPass}
                 onChange={this.changeHandler}
                 required/>
                <small className="passErr form-text"></small>
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

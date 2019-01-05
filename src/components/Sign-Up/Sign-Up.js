import React, { Component } from 'react';
import './Sign-Up.css';
import Header from '../Header/Header'; 
import firebase from '../FireBase/FireBase.js'; // <--- add firebase

 const fireStore = firebase.firestore();
 fireStore.settings({
  timestampsInSnapshots: true
});

class SignUp extends Component {
 
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
    firebase.auth().createUserWithEmailAndPassword(Email, Password)
    .then(()=>{
        console.log("data saved!");
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

    // =============>> show error message  
      showErrMsg =(error)=>{
        let emailErr = document.getElementsByClassName("emailErr")[0]; 
        let passErr = document.getElementsByClassName("passErr")[0];   
        
        if(error.code === "auth/invalid-email")
        {   
          passErr.style.display = "none"; 
          emailErr.innerHTML = error.message ;
          emailErr.style.display = "block";
        }
        else if(error.code === "auth/weak-password")
        {          
          emailErr.style.display = "none";
          passErr.innerHTML = error.message ;          
          passErr.style.display = "block"; 
        }
        else if (error.code === "auth/email-already-in-use")
        {
          passErr.style.display = "none";
          emailErr.innerHTML = error.message ;
          emailErr.style.display = "block";   
        }
      }
  


  
    
    
      //for store data in data base
    // const docRef = fireStore.doc("Users/userData");
    // docRef.set({
    //   Email:this.state.userEmail,
    //   Password:this.state.UserPass
    // }).then(function(){
    //   console.log("data saved!");
    // }).catch(function(error){
    //   console.log("there are error here ",error);
    // });

 
 
   
 
    render() {  
    return (
        <section id="MF-SignUp">        
          <Header/>
          <div className="MF-SignUp-Form p-3 text-white h-75 mx-auto d-flex flex-column justify-content-center align-items-center">
          <h2 className="py-4">SIGN UP</h2>
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
            <button className="btn w-100 mt-4">SIGN UP</button>
            </form>
          </div>
        </section>
    );
  }
}

export default SignUp;

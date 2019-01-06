import React, { Component } from 'react';
import firebase from '../FireBase/FireBase.js'; // <--- add firebase
import SignView from '../SharedSign-InOut/Sign-InUp-view';

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

 //==============>> to remove err msg when change input val
   changeHandler=(e)=>{ 
     this.setState({
       [e.target.name] : e.target.value
     })
     document.getElementsByClassName("emailErr")[0].innerHTML = ""; 
     document.getElementsByClassName("passErr")[0].innerHTML = "";  
   } 
 //==============>> to submit form in firebase
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
        this.props.history.push('/FavFilms');

      }).catch((error)=>{
        this.showErrMsg(error);        
        console.log("there are error here ",error.message);
      });

    } 

 
 // =============>> show error message
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

  //===============================================================View=======================================  
    render() {
    return (
        <SignView title ="SIGN IN"
         submitHandle ={this.submitHandler} 
         EmailState ={this.state.userEmail}
         PassState ={this.state.UserPass}
         onChangeHandle ={this.changeHandler}
         displayRegNw = "true"
         />
    );
  }
}

export default SignIn;

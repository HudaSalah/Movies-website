import React, { Component } from 'react';
import firebase from '../FireBase/FireBase.js'; // <--- add firebase
import SignView from '../SharedSign-InOut/Sign-InUp-view';

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
    firebase.auth().createUserWithEmailAndPassword(Email, Password)
    .then(()=>{
        console.log("data saved!");
      //to clear inputs after saving data
        this.setState({
          userEmail:'',
          UserPass:''
        });
        this.props.history.push('/SearchMovie');
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

 
 
   
 
   
   //===============================================================View=======================================   
   render() {  
    return (
        <SignView title ="SIGN UP"
         submitHandle ={this.submitHandler} 
         EmailState ={this.state.userEmail}
         PassState ={this.state.UserPass}
         onChangeHandle ={this.changeHandler}
         displayRegNw = "false"
         BgImg = "MF-SignUp"
         />  
    );
  }
}

export default SignUp;

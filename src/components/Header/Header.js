import React, { Component } from 'react';
import firebase from '../FireBase/FireBase.js'; // <--- add firebase
import './Header.css';
import Logo_img from '../../assets/words_white.png';
import Fav_img from '../../assets/icons/favorite.png';
// import LogOut_img from '../../assets/icons/logout.png';
import { Link } from "react-router-dom";

const fireStore = firebase.firestore();
fireStore.settings({
 timestampsInSnapshots: true
});

class Header extends Component {
  constructor(props){
    super(props);
    this.LogOutHandler=this.LogOutHandler.bind(this);
    this.state ={
      goLogHome :this.props.goLogHome
    }
  }

  //logOut user from website
  LogOutHandler =(e) =>
  {
    e.preventDefault();
    firebase.auth().signOut()
    .then(()=>{
      console.log("user logged out!");
      this.props.history.push('/');
    })
    .catch((error)=>{      
      console.log("there are error here ",error.message);
    });
  }




  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg">
        {
          (this.state.goLogHome)?

          <Link to="/"  className="navbar-brand mx-auto">
              <img src = {Logo_img} alt="logo img"/>           
          </Link>
          :
          <Link to="/SearchMovie"  className="navbar-brand mx-auto">
              <img src = {Logo_img} alt="logo img"/>           
          </Link>
        }
         
          <Link to="/SignIn" className="navbar-signIn">         
            <button type="button" className="btn btn-large">SIGN IN</button>
          </Link>

          <Link to="/FavFilms" className="navbar-FavBtn"> 
            <button type="button" className="btn">
              <img src = {Fav_img} alt="Fav img" title="Favourit List"/> 
            </button>
          </Link>
        {/* {
          (!this.state.goLogHome)?
          <Link to="/" className="navbar-LogOut"> 
            <button type="button" onClick={this.LogOutHandler} className="btn">
              <img src = {LogOut_img} alt="LogOut img" title="Log Out"/> 
            </button>
          </Link>
          :null
        } */}
           
        </nav>
      </header>
    );
  }
}

export default Header;
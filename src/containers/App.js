import React, { Component } from 'react';
import './App.css';

 // for routes(navigate between pages).
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import SignUp from '../components/Sign-Up/Sign-Up';
import SignIn from '../components/Sign-In/Sign-In';
import SearchMovie from '../components/Search-movie/Search-movie';
import FavFilms from '../components/Fav-Films/Fav-Films';
import Footer from '../components/Footer/Footer';
import MovieDetails from '../components/MovieDetails/MovieDetails';


class App extends Component {
  render() {
    return (
    <Router>
      <div className="container-fluid p-0">
      <Route exact path="/" component={Home} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SearchMovie" component={SearchMovie} />
      <Route path="/FavFilms" component={FavFilms} />
      <Route path="/MovieDetail:id" component={MovieDetails} />
      {/* Footer */}
      <Footer/>
      </div>
    </Router> 
    );
  }
}

export default App;

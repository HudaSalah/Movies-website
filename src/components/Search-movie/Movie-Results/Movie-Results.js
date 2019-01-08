import React ,{Component} from 'react';
import './Movie-Results.css';
import InfoMovieIcon from '../../../assets/icons/information.png';
import { Link } from "react-router-dom";
import firebase from '../../FireBase/FireBase.js'; // <--- add firebase

 //for store data in data base
const DB = firebase.firestore();
DB.settings({
  timestampsInSnapshots: true
}); 


class MovieResults extends Component{
  constructor(){
    super();
    this.state ={
      showRemFavBtn : false
    }
    this.AddMovieToFav = this.AddMovieToFav.bind(this);
    this.RmMovieToFav = this.RmMovieToFav.bind(this);
  }

//add movie to favourit list
  AddMovieToFav = (e)=>{
    this.setState({
      showRemFavBtn : true
    });
    console.log(e.target.closest(".movie"));
    console.log(document.querySelectorAll('.movie .MVposter'))

  //   DB.collection("FavMovie").add({
  //     Id: "1",
  //     MoviePoster: "Lovelace",
  //     MovieName: 1814 ,
  //     MovieInfo:{
  //       MovieInfoY:"2019",
  //       MovieInfoM:"160",
  //       MovieVoteCount:"12478"
  //     },
  //     MovieDesc:"lblblaaaaaaa lololoyyyy",

  //   })
  //   .then(function(docRef) {
  //     console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch(function(error) {
  //     console.error("Error adding document: ", error);
  //   });
 }

//remove movie from fav list
RmMovieToFav =() =>{
  this.setState({
    showRemFavBtn : false
  })
}
  render(){
    return ( 
        <div className="col-md-2 col-sm-6 p-0 mb-4 movie" id={this.props.MovieID}>
        {/* movie poster */}
          <div className="img-wrapper position-relative">
            <figure className="figure m-0">
             <img src= {this.props.MovieImg} className="MVposter rounded w-100 h-100" alt="movie poster"/>
            </figure>
            <aside className="position-absolute">
              <Link to={`/MovieDetail/${this.props.MovieID}`}>
                <img src={InfoMovieIcon} alt="play movie icon"/>
              </Link>
            </aside>
          </div>

        {/* movie details */}
          <div className="movie-desc position-absolute">
              <div className="card-body">
                  <h6 className="card-title">{this.props.MovieName}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                   <span>{this.props.MovieInfoY} </span> | <span> {this.props.MovieInfoM} </span> | <span>{this.props.MovieVoteCount} </span>
                  </h6>
                  <div className="card-text">
                     <p>{this.props.MovieDesc}</p>
                  </div>
                  {
                    (!this.state.showRemFavBtn)?
                    <button className="btn" onClick={this.AddMovieToFav}> + Add Fav</button>
                    :
                    <button className="btn" onClick={this.RmMovieToFav}> - Remove Fav</button>
                  }
                  
              </div>
          </div>             
        </div>
      );
  }
      
    

}


export default MovieResults;
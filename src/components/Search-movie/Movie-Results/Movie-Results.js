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
  constructor(props){
    super(props);
    this.AddMovieToFav = this.AddMovieToFav.bind(this);
    this.RemoveFavMovie = this.RemoveFavMovie.bind(this);
    this.state ={
      showRemFavBtn : this.props.showRemFavBtn,
      RemoveFromDom : this.props.RemoveFromDom
    }    
  }

//add movie to favourit list
  AddMovieToFav = (e)=>{
    this.setState({
      showRemFavBtn : true
    });
    let element = e.target.closest(".movie");
  
    element.classList.add("AddThis");    
    let IdVal = document.querySelector(".AddThis").getAttribute("id");
    let PosterImg = document.querySelector(".AddThis .MVposter").getAttribute("src");
    let MovieName = document.querySelector(".AddThis .card-title").innerHTML;
    let MovieInfoY = document.querySelector(".AddThis .Year").innerHTML;
    let MovieInfoM = document.querySelector(".AddThis .Min").innerHTML;
    let MovieVoteCount = document.querySelector(".AddThis .Vcount").innerHTML;
    let MovieDesc = document.querySelector(".AddThis .card-text p").innerHTML;
    element.classList.remove("AddThis");

    //append movie data for movie id in fire base store
    DB.collection("FavMovie").doc(IdVal).set({
      Id: IdVal,
      MoviePoster: PosterImg,
      MovieName: MovieName,
      MovieInfo:{
        MovieInfoY: MovieInfoY,
        MovieInfoM: MovieInfoM,
        MovieVoteCount: MovieVoteCount
      },
      MovieDesc: MovieDesc,

    })
    .then(function() {
      console.log("Document saved successfully");
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
 }

//remove movie from fav list
  RemoveFavMovie =(e) =>{
    this.setState({
      showRemFavBtn : false
    })

    let element = e.target.closest(".movie");
    
      element.classList.add("RemoveThis");    
      let IdVal = document.querySelector(".RemoveThis").getAttribute("id");    

      DB.collection("FavMovie").doc(IdVal).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    element.classList.remove("RemoveThis");

    //check if in fav-films remove from dom
    if(this.state.RemoveFromDom)
    {
      element.parentNode.removeChild(element);
    }

    
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
                      <span className="Year">{this.props.MovieInfoY} </span>
                    | <span className="Min"> {this.props.MovieInfoM} </span>
                    | <span className="Vcount">{this.props.MovieVoteCount} </span>
                  </h6>
                  <div className="card-text">
                     <p>{this.props.MovieDesc}</p>
                  </div>
                  {
                    (!this.state.showRemFavBtn)?
                    <button className="btn" onClick={this.AddMovieToFav}> + Add Fav</button>
                    :
                    <button className="btn" onClick={this.RemoveFavMovie}> - Remove Fav</button>
                  }
                  
              </div>
          </div>             
        </div>
      );
  }
      
    

}


export default MovieResults;
import React from 'react';
import './Movie-Results.css';
// import { Link } from "react-router-dom";
import InfoMovieIcon from '../../../assets/icons/information.png';


const MovieResults =(props)=>{
      return ( 
        <div className="col-md-2 col-sm-6 p-0 mb-4" id={props.MovieID}>
        {/* movie poster */}
          <div className="img-wrapper position-relative">
            <figure className="figure m-0">
             <img src= {props.MovieImg} className="rounded w-100 h-100" alt="movie poster"/>
            </figure>
            <aside className="position-absolute">
              <span><img src={InfoMovieIcon} alt="play movie icon"/></span>
            </aside>
          </div>

        {/* movie details */}
          <div className="movie-desc position-absolute">
              <div className="card-body">
                  <h6 className="card-title">{props.MovieName}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                   <span>{props.MovieInfoY} </span> | <span> {props.MovieInfoM} </span> | <span>{props.MovieVoteCount} </span>
                  </h6>
                  <div className="card-text">
                     <p>{props.MovieDesc}</p>
                  </div>
                  <a className="btn"> + Add Fav</a>
              </div>
          </div>             
        </div>
      );
    

}


export default MovieResults;
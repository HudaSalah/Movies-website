import React ,{Component} from 'react';
import './Movie-Results.css';
import InfoMovieIcon from '../../../assets/icons/information.png';
import { Link } from "react-router-dom";

class MovieResults extends Component{
  constructor(){
    super();
  }

  render(){
    return ( 
        <div className="col-md-2 col-sm-6 p-0 mb-4" id={this.props.MovieID}>
        {/* movie poster */}
          <div className="img-wrapper position-relative">
            <figure className="figure m-0">
             <img src= {this.props.MovieImg} className="rounded w-100 h-100" alt="movie poster"/>
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
                  <a className="btn"> + Add Fav</a>
              </div>
          </div>             
        </div>
      );
  }
      
    

}


export default MovieResults;
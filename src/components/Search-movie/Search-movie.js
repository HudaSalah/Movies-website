import React, { Component } from 'react';
import './Search-movie.css';
import Header from '../Header/Header';
import MovieResults from './Movie-Results/Movie-Results';

class SearchMovie extends Component {

    constructor()
    {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            MoviesResult: [],
            TotalResults :'',
            showDivErrMsg :'hide'
          };

          const BaseImgUrl="";
    }

    BaseImgUrl = "http://image.tmdb.org/t/p/w185/";

    //method to search about movie of moviesAPI
    SearchMovieHandler = ()=>{
        let InputVal = document.getElementById("InpSearch").value;
        if(InputVal !== "")
        {
            console.log(InputVal);
            fetch("https://api.themoviedb.org/3/search/movie?api_key=b7dac6cd1c7b4aaefb90a26df71ee3d3&language=en-US&query="+InputVal+"&page=1&include_adult=false")
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    MoviesResult: result.results,
                    TotalResults:result.total_results
                });
                console.log(this.state.MoviesResult , result.total_results);
                if(result.total_results == 0)
                {
                    this.setState({
                        showDivErrMsg:'show'
                    })
                }
                },
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                }
            )
        }
        
    }

    changeInpSearchVal =() =>{
        this.setState({
            showDivErrMsg:'hide'
        })
    }

    render = ()=> {
      return ( 
    <div>
       <section id="MF-SearchHome">
        <div className="MF-ShCont">            
          <Header/>
          <div className="MF-ShCont-search h-75 pt-5 d-flex flex-column justify-content-center align-items-center">
            <article className="text-center text-white py-3">
              <h1>Momento Film</h1>
              <p>FIND WHAT YOU LOVE </p>
              <p>NO LIMITATION</p>
            </article>

            <div className="input-group w-50">
                <input type="text" className="form-control" id="InpSearch" onChange={this.changeInpSearchVal} placeholder="SEARCH FOR MOVIES , SERIES , ANIMATIONS"/>
                <div className="input-group-append">
                    <button className="btn" type="button">
                      <div className="btn-search" onClick={this.SearchMovieHandler}></div> 
                    </button>
                </div>
            </div>
            <div className="findRes pt-2">
              <p>You will find Result below if it's exist 'just scroll down'</p>
              <p className="arrow-down mx-auto">»</p>
            </div>
          </div>
        </div>
       </section>

        {/* ============================= movie results =================================== */}
        {/* condition to see if display section or not in case of there are results or not  */}
        {
            (this.state.TotalResults > 1)?
            <section id="MF-Movies">
                <div className="container MF-Movies-cont p-5">
                    <div className="MF-Movies-header position-relative d-flex justify-content-center text-white py-4">
                    <h1> Movies </h1>
                    </div>
                    <div className="row justify-content-start mb-5 pt-5">
                        { this.state.MoviesResult.map((Movie,index)=>{                   
                            return (
                                Movie.vote_count > 5 ?
                                    <MovieResults MovieImg={this.BaseImgUrl + Movie.poster_path}
                                    key={Movie.id}
                                    MovieID ={Movie.id}
                                    MovieName={Movie.title}
                                    MovieInfoY={Movie.release_date}
                                    MovieInfoM="180min"
                                    MovieVoteCount ={Movie.vote_count}
                                    MovieDesc={Movie.overview} 
                                    />                            
                                    :null  
                                    )
                            })
                        }
                    </div>
                </div>
            </section>
            :
            <section id="noResultFound" className={this.state.showDivErrMsg}>
               <div className="d-flex justify-content-center text-white py-4">
                  <p>No Movies Founded , please search again with meaningful keyword.</p>
               </div>
            </section>
        }
       
    </div>
      );
    }

}


export default SearchMovie;
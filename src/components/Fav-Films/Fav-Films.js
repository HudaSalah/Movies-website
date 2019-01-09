import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../Search-movie/Search-movie.css';
import './Fav-Films.css';
import Header from '../Header/Header';
import MovieResults from '../Search-movie/Movie-Results/Movie-Results';
import firebase from '../FireBase/FireBase.js'; // <--- add firebase
import MovieImg from '../../assets/icons/movie.png';


 //for store data in data base
const DB = firebase.firestore();
DB.settings({
  timestampsInSnapshots: true
}); 



class FavFilms extends Component {
    constructor()
    {
        super();
        this.state = {
            existFav : false,
            FavMovies :[]
        }

        this.updateStateHandler = this.updateStateHandler.bind(this);
    }
    FavMoviesArr =[];


    componentDidMount=()=>{    
        DB.collection("FavMovie").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} =>  ${JSON.stringify(doc.data())}`);                
                this.FavMoviesArr.push(
                    {"docId":doc.id,"docData":doc.data()}
                );               
               console.log(this.FavMoviesArr)         
            });

            this.updateStateHandler();
        });
    }

    //append favourit movies to array
    updateStateHandler =() =>{
        if(this.FavMoviesArr.length>0)
        {            
            this.setState({
            existFav:'true',
                FavMovies : [...this.FavMoviesArr]
            });
            console.log(this.state.FavMovies) 
        }
    }
  

    render() {
      return ( 
        <section id="MF-Movies">
         <Header goLogHome={false}/>
        <div className="container MF-Movies-cont p-5">
            <div className="MF-Movies-header position-relative d-flex justify-content-center text-white py-4">
            <h1> Favourit Movies </h1>
            </div>
            

            { 
                (this.state.existFav)?
                <div className="row justify-content-start mb-5 pt-5">
                    { this.state.FavMovies.map((Movie,index)=>{             
                                        return (
                                                <MovieResults MovieImg={Movie.docData.MoviePoster}
                                                key={Movie.docId}
                                                MovieID ={Movie.docData.Id}
                                                MovieName={Movie.docData.MovieName}
                                                MovieInfoY={Movie.docData.MovieInfo.MovieInfoY}
                                                MovieInfoM={Movie.docData.MovieInfo.MovieInfoM}
                                                MovieVoteCount ={Movie.docData.MovieInfo.MovieVoteCount}
                                                MovieDesc={Movie.docData.MovieDesc}
                                                showRemFavBtn = {true} 
                                                RemoveFromDom = {true}
                                                /> 
                                            )
                                    })
                    }
                </div>
                :
                <div className="row align-items-center flex-column mb-5 pt-5 text-white">
                <div><img src= {MovieImg} className="not-foundImg pb-3" alt="not found movie"/></div>
                  <p className="text-center">No Favourit Movies added yet , go to <Link to="/SearchMovie">Home</Link> and add what you love </p>
                </div>
            }
               
            
        </div>
    </section>
      );
    }

}


export default FavFilms;
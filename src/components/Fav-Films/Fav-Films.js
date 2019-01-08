import React, { Component } from 'react';
import '../Search-movie/Search-movie.css';
import './Fav-Films.css';
import Header from '../Header/Header';
import MovieResults from '../Search-movie/Movie-Results/Movie-Results';
import firebase from '../FireBase/FireBase.js'; // <--- add firebase

 //for store data in data base
const DB = firebase.firestore();
DB.settings({
  timestampsInSnapshots: true
}); 



class FavFilms extends Component {

    BaseImgUrl = "http://image.tmdb.org/t/p/w185/";
    FavMovies =[];


    componentDidMount=()=>{
        debugger
        DB.collection("FavMovie").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} =>  ${JSON.stringify(doc.data())}`);                
                this.FavMovies.push(
                    {"docId":doc.id,"docData":JSON.stringify(doc.data())}
                )
                        
            });
        });
    }

    render() {
      return ( 
        <section id="MF-Movies">
         <Header/>
        <div className="container MF-Movies-cont p-5">
            <div className="MF-Movies-header position-relative d-flex justify-content-center text-white py-4">
            <h1> Favourit Movies </h1>
            </div>
            <div className="row justify-content-start mb-5 pt-5">
                { this.FavMovies.map((Movie,index)=>{                   
                    return (
                            <MovieResults MovieImg={this.BaseImgUrl + Movie.docData.MoviePoster}
                            key={Movie.docId}
                            MovieID ={Movie.docData.Id}
                            MovieName={Movie.docData.MovieName}
                            MovieInfoY={Movie.docData.MovieInfo.MovieInfoY}
                            MovieInfoM={Movie.docData.MovieInfo.MovieInfoM}
                            MovieVoteCount ={Movie.docData.MovieInfo.MovieVoteCount}
                            MovieDesc={Movie.docData.MovieDesc} 
                            /> 
                         )
                   })
                }
            </div>
        </div>
    </section>
      );
    }

}


export default FavFilms;
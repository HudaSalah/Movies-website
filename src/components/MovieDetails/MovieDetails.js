import React ,{ Component }  from 'react';
import './MovieDetails.css';
import Header from '../Header/Header';
import poster from '../../assets/posters/movie8.jpg';

class MoviesDetails extends Component {

    constructor()
    {
        super();
        this.state ={
         
        };
        const DetailsTitle="";
    }
    DetailsTitle = ["Description","Release Date","Vote Average","Vote Count","Language","Pro Company","RunTime"];

    render=()=>{
         return(
        <section id="MF-MovieDetail">
        <div className="MF-MDcontent">            
          <Header/>
          <div className="container my-4">
            <div className="row text-white container-border">
           {/* movie poster  */}
              <div className="col-md-4 my-auto">
              <figure className="figure rounded m-0 p-2">
               <img src={poster} alt="movie poster" className="w-100 h-100"/>
               </figure>
              </div>
           {/* movie details */}
              <div className="col-md-8 my-auto pt-4">
                <article>
                    <h4>movie name </h4>
                    {this.DetailsTitle.map((type,index)=>{
                        return(
                         <div className="row py-3" key={index}>
                            <div className="col-md-3 type">{type} :</div>
                            <div className="col-md-8">ay btngaaaaaaaaaaaaaaaaaan</div>
                        </div>)
                    })}                   
                </article>
              </div>
            </div>
          </div>
        </div>
        </section>
    );
    }
   
}

export default MoviesDetails;
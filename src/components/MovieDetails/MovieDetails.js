import React ,{ Component }  from 'react';
import './MovieDetails.css';
import Header from '../Header/Header';

class MoviesDetails extends Component {

    constructor()
    {
        super();
        this.state ={
            error: null,
            isLoaded: false,
            MoviesDetail:{},
            MovieInfo :[{}]
        };       
    }
    BaseImgUrl = "http://image.tmdb.org/t/p/w185/";


    appendInfo =(content)=>{
         this.setState({MovieInfo : [
        {"key":'Description',"value":content.overview},
        {"key":'Release Date',"value":content.release_date},
        {"key":'Vote Average',"value":content.vote_average},
        {"key":'Vote Count',"value":content.vote_count},
        {"key":'Collection',"value":content.production_countries[0].name},
        {"key":'Pro Company',"value":content.production_companies[0].name},
        {"key":'Run Time',"value":content.runtime},]
    });
    }
   
    componentDidMount=()=>{
        let id = this.props.match.params.id;
        fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=b7dac6cd1c7b4aaefb90a26df71ee3d3&language=en-US")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                MoviesDetail: result
            });
            this.appendInfo(this.state.MoviesDetail);
            
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    } 


    render=()=>{
         return(
        <section id="MF-MovieDetail">
            <div className="MF-MDcontent">            
            <Header goLogHome={false}/>
                <div className="container my-4">
                    <div className="row text-white container-border">
                {/* movie poster  */}
                    <div className="col-md-4 col-sm-12 my-auto">
                        <figure className="figure rounded m-0 p-2">
                           <img src={this.BaseImgUrl + this.state.MoviesDetail.poster_path}
                            alt="movie poster"
                            className="w-100 h-100"/>
                        </figure>
                    </div>
                {/* movie details */}
                    <div className="col-md-8 col-sm-12 my-auto pt-4">
                        <article>
                            <h4> {this.state.MoviesDetail.title} </h4>
                            {this.state.MovieInfo.map((type,index)=>{
                                return(
                                <div className="row py-2" key={index}>
                                    <div className="col-md-3 type">{type.key}</div>
                                    <div className="col-md-8">{type.value}</div>
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
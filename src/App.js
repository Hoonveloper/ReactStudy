import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state={
    isLoading:true,
    movies:[]
  };
  /* 
    axios에서 받을 떄까지 js한테 기다리라고 해야함
    => async ,await 이용
    async => "js야 너 이거 기다려야함"
    await => "뭘 기다려? (여기선)axios를 기다려"
  */
  getMovies= async () =>{
    //이건 ??.data.data.movies 하는것과 같음.
    const {data:{data:{movies}}}=await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    //console.log(movies);
    this.setState({movies,isLoading:false});
  };

  async componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies}=this.state;
    return (
      <section class="container">
        {isLoading
          ? <div class="loader">
              <span class="loader_text">Loading..</span>
            </div>
          : <div class="movies">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
            ))}
          </div>
        }
              
          
      </section>
    )
  }  
 }       

export default App;

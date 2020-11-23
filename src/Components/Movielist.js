
import React from 'react';
import './Movielist.css';
import 'bootstrap/dist/css/bootstrap.css';
import Movieitem from './Movieitem';
import Favouritemovie from './Favouritemovie';

function Movielist(props) {
  if (!props.movies) {
    return null;
  }
  props.favs.map((f)=>console.log(f));
  return (
      <>
        <div className="center-1 d-flex row">
          <div className="movieList col-12">
          </div>          
        </div>

        <div className="film_consigliati">
          <div className="center-2 justify-content-around">
              {
              props.movies.map((movie)=>{
              return <Movieitem key={movie.imdbID} movie={movie}></Movieitem>
              })
              }
          </div>
        </div>
        <div className="">
              {/* {
              props.favMovies.map((fav)=>{
              return <Movieitem key={fav.imdbID} movie={fav}></Movieitem>
              })
              } */}
              {
              props.favs.map((movie)=>{
              return <Favouritemovie key={movie.imdbID} movie={movie}></Favouritemovie>
              })
              }
        </div>
      </>
    )
   
}

export default Movielist;

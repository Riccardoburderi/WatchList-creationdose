import React from 'react';
import Movielist from './Movielist';
import Navbar from './Navbar';
import menu from './../../src/menu.png';
import close from './../../src/close.png';

const APIKEY = 'a9fa6d93';
const APIURL = 'http://www.omdbapi.com/';

function fetchMovies(search){
  return fetch(APIURL+'?apikey='+APIKEY+'&s='+search)
          .then((res)=>res.json());
}

const routes = [{to:'/home',label:'MyWatchList'}];
const navbarconfig = {
    routes : routes,
    search : true,
    logo : {src:'https://via.placeholder.com/50',alt:'logo'}
  }

const menuStyle = {
  maxWidth : '25px',
  marginTop : '15px'
}
const closeStyle = {
  maxWidth : '25px',
  marginTop : '15px'
}

let sortedMovies = [];

class Movies extends React.Component{
  constructor(props){
    super(props);
    this.state={
      movies : [],
      totalMovies : 0,
      favMovies: [],
      isActive : false
    };
    this.searchMovie = this.searchMovie.bind(this);

    this.burgerMenu = this.burgerMenu.bind(this);
  }
  burgerMenu = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  searchMovie = (termine = "")=>{
    if(termine.length < 3){
      return
    } 
    fetchMovies(termine).then((res)=>{
      this.setState({
        movies:res.Search,
        totalMovies:res.totalSearch,
      });

      this.state.movies.map((movie)=>{
        console.log(movie.Year);
        sortedMovies.splice();
        sortedMovies.push(movie);
        })
        sortedMovies.sort((a, b) => (a.Year > b.Year) ? -1 : 1);
        this.setState({
          movies:sortedMovies,
          favMovies:sortedMovies
        }); 
        sortedMovies = [];
    });

  }
 
  render(){

    return (
        <>
        {
          this.state.isActive ?(
            <img className="burger menu-close " src={close} alt="Close menu" style={closeStyle}  onClick={this.burgerMenu}/>
            ) : (
              <img className="burger menu-icon" src={menu} alt="Menu" style={menuStyle}  onClick={this.burgerMenu}/>
          ) 
        }
        
        {/* <div className="burger" onClick={this.burgerMenu}>
          <img className="menu-icon" src={menu} alt="Menu" style={menuStyle}/>
        </div> */}
        <Navbar config={navbarconfig} onsearch={this.searchMovie} burger={this.state.isActive}></Navbar>
        <div id="Homemovie"className="home-movielist">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 profilo">

            <div className={this.state.isActive ? "appl" : "vuoto"}>
                <div className="appl profile-active">
                    <div className="avatar">
                        <img src="https://via.placeholder.com/150/0000FF/808080 ?Text=Profile Image"/>                    
                    </div>
                    <div className="nomeUtente">
                        <h1>Username</h1>
                    </div>
                    <button className="btn btn-success" onClick={this.burgerMenu}>HOME</button>
               </div>
                <div className="vuoto"></div>
            </div>
            </div>
            <div className={this.state.isActive ? "small" : "large"}>
              <Movielist movies={this.state.movies} favs={this.state.favMovies}></Movielist>
            </div>
        </div>
      </>
    )
  }
  componentDidMount(){
    this.searchMovie('lion');
  }

}


export default Movies;

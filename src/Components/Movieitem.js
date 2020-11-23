import React from 'react';
import './Movieitem.css'; 

function checkList(){
    alert('Controllo se il film è già presente in watchlist');
}

function Movielist({movie}){    
        return (
            <>
                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 card tool">
                    <span class="tooltiptext">
                    <h5 className="card-title">{movie.Title}</h5>
                        <p className="card-text">ID film: {movie.imdbID}</p>
                        <p className="card-text">Anno: {movie.Year}</p>
                        <button className="btn btn-secondary" onClick={checkList}>Add to Watchlist</button>
                    </span>
                    <img className="card-img-top" alt={movie.Title} src={movie.Poster}/>
                    <div className="card-body">
                        
                    </div>
                </div>
            </>
        )
    
}

export default Movielist;

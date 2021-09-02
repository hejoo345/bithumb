import React from 'react';
import '../css/Movie.css';

const Movies = ({id, year, title, summary, poster, genres}) => {
    return(
            <div className='movie'> 
                <img src={poster} alt={title} ></img>
                <h3>{title} </h3>
                {year} 작품 <br></br>
                {genres}<p></p>
                {summary}
            </div>
    )};

export default Movies;
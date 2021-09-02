import React from 'react';
import '../css/Movie.css';
import PropTypes from 'Prop-types';

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

    Movies.PropTypes = {
        year: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

export default Movies;
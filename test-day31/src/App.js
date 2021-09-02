import './App.css';
import '../src/css/Movie.css';
import axios from 'axios';
import Movies from './components/Movies';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState({
    isLoading: true,
    movies: []
  })

  // aysnc await
  const handleMovies = async() =>{
    const {
      data: {data:{movies}}
    } =  await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    setMovies({
          isLoading: false,
          movies: [...movies]
    });
  }

  useEffect(()=>{
    console.log('component 마운트 완료 후...');
    handleMovies();
  },[])
  return (
    <div className="App">
      <div>App.js Axios 실습</div>
      {
        movies.isLoading===false ? (
        <div className='movies'>
          {
            movies.movies.map(movie => (
              <Movies 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
              ></Movies>
            ))
          }
        </div>
          )  : (<h2>no</h2>) 
      }
      <div></div>
    </div>
  );
}

export default App;

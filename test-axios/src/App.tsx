import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Album from './components/Album';
import styled from 'styled-components';

interface AlbumsArray{
  albumID: number,
  id: number,
  title: string,
  url:string,
  thumbnailUrl: string
}
interface AlbumState{
  isLoading: boolean;
  albums: AlbumsArray[];
}
const  App:React.FC = ()  => {
  const [album, setAlbum] = useState<AlbumState>({
    isLoading: true,
    albums: [],
  })

  const loadAlbums = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(result=>{
        console.log(result.data[0])
        setAlbum({
          isLoading: false,
          albums: [...result.data]
        })
      })
  }

  useEffect(() => {
    loadAlbums();
    return () => loadAlbums();
  }, [])
  
  return (
    <div className="App">
      {
        album.isLoading ? (<h1>Loading...</h1>) :
        (
          <AlbumsDiv>
            {
              album.albums.map(album=>(
                <Album
                key={album.id}
                id={album.id}
                title={album.title}
                thumbnailUrl={album.thumbnailUrl}
                url={album.url}
                ></Album>
              ))
            }
          </AlbumsDiv>
        )
      }
    </div>
  );
}

const AlbumsDiv = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  background-color: #f4f4f8;
`;

export default App;

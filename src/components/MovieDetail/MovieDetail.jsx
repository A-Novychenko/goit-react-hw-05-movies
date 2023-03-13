import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from 'services/MoviesAPI';

export const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const movieItem = await getMovie(movieId);
      console.log('movieItem', movieItem);
      setMovie(movieItem);
    };
    fetchMovie();
    return () => {
      'abort';
    };
  }, [movieId]);

  console.log('movie', movie);

  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie['poster_path']}`}
        alt="#"
      />
      <p></p>
    </div>
  );
};

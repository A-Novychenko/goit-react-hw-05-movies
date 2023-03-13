import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getMovies } from 'services/MoviesAPI';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const { results } = await getMovies();
      setMovies(results);
    };
    getMovie();
  }, []);
  //возможно нужно добавить аборт фетча при анмаунте
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`movies/${movie.id}`}>{movie.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

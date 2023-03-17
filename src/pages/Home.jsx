import { useEffect, useState } from 'react';
import { getMovieList } from 'services/MoviesAPI';
import { MovieList } from 'components/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const { results } = await getMovieList();
        setMovies(results);
      } catch (error) {
        console.log(error);
        //!!!!!!!!!!!!!!!!!!!!!!
      }
    };
    getMovie();
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} path={'movies/'} />
    </>
  );
};

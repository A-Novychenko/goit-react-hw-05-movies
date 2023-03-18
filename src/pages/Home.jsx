import { useEffect, useState } from 'react';
import { getMovieList } from 'services/MoviesAPI';
import { MovieList } from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    const getMovie = async () => {
      try {
        const { results } = await getMovieList();

        if (!results) {
          return await Promise.reject(new Error(`" Not found "`));
        }
        setMovies(results);
      } catch (error) {
        setError(true);
      }
    };
    getMovie();
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      {error && (
        <h2 style={{ color: 'red', fontSize: 20 }}>
          Oops, mistake! Please try again
        </h2>
      )}
      {!error && <MovieList movies={movies} path={'movies/'} />}
    </>
  );
};

export default Home;

import { useEffect, useState } from 'react';
import { getMovieList } from 'services/MoviesAPI';
import { MovieList } from 'components/MovieList';
import { Circles } from 'react-loader-spinner';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    const abortController = new AbortController();

    const getMovie = async () => {
      try {
        setIsloading(true);
        setError(false);
        const { results } = await getMovieList(abortController.signal);

        if (!results) {
          return await Promise.reject(new Error(`" Not found "`));
        }
        setMovies(results);
      } catch (error) {
        // setError(true);
      } finally {
        setIsloading(false);
      }
    };
    getMovie();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      {isLoading && (
        <Circles
          height="300"
          width="300"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            position: 'fixed',
            top: '150px',
            left: '50%',
            transform: 'translate(-50%)',
          }}
          wrapperClass=""
          visible={true}
        />
      )}

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

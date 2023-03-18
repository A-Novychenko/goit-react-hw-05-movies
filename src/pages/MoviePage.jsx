import { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import { MovieDetails } from 'components/MovieDetails';
import { getMovie } from 'services/MoviesAPI';
import { Circles } from 'react-loader-spinner';

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setError(false);
    setIsloading(true);
    const abortController = new AbortController();

    const fetchMovie = async () => {
      try {
        const movieItem = await getMovie(movieId, abortController.signal);
        if (!movieItem) {
          setError(true);
          return await Promise.reject(new Error(`" Not found "`));
        }
        setMovie(movieItem);
      } catch {
      } finally {
        setIsloading(false);
      }
    };

    fetchMovie();
    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <>
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
      {error && !isLoading && (
        <h2 style={{ color: 'red', fontSize: 20 }}>
          Oops, mistake! Please try again
        </h2>
      )}
      <Link to={backLink.current}>
        <TbArrowBackUp size={40} color={'green'} />
      </Link>
      {movie && !error && !isLoading && <MovieDetails movie={movie} />}
    </>
  );
};
export default MoviePage;

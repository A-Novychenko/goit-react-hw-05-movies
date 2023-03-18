import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Circles } from 'react-loader-spinner';
import { getMovies } from 'services/MoviesAPI';
import { MovieList } from 'components/MovieList';
import { SearchMovieForm } from 'components/SearchMovieForm';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    if (!query) return;

    const abortController = new AbortController();
    setIsloading(true);
    const fetchMovies = async () => {
      try {
        setError(null);
        const { results } = await getMovies(query, abortController.signal);
        if (results.length === 0) {
          setSearchParams({});
          setMovies(null);
          return await Promise.reject(new Error(`" ${query} "`));
        }
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };
    fetchMovies();
    return () => {
      abortController.abort();
    };
  }, [query, setSearchParams]);

  const uodateQueryStringr = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const onSubmit = ({ query }) => {
    const queryNormalise = query.toLowerCase().trim();
    uodateQueryStringr(queryNormalise);
    reset();
  };

  if (errors.query) {
    toast.error('This field is required!');
  }

  if (error && !errors.query) {
    toast.error(`${error} not found!`);
  }

  return (
    <>
      <SearchMovieForm onSubmit={handleSubmit(onSubmit)} register={register} />
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
      {movies && <MovieList movies={movies}></MovieList>}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Movies;

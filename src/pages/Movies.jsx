import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getMovies } from 'services/MoviesAPI';
import { MovieList } from 'components/MovieList';
import { SearchMovieForm } from 'components/SearchMovieForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [movies, setMovies] = useState(null);
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

    const fetchMovies = async () => {
      try {
        const { results } = await getMovies(query);
        if (results.length === 0) {
          return await Promise.reject(new Error(`" ${query} "`));
        }
        setMovies(results);
      } catch (error) {
        toast.error(`${error.message} not found!`);
        reset();
        setSearchParams({});
        setMovies(null);
      }
    };
    fetchMovies();
  }, [query, reset, setSearchParams]);

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

  return (
    <>
      <SearchMovieForm onSubmit={handleSubmit(onSubmit)} register={register} />
      {movies && <MovieList movies={movies}></MovieList>}
    </>
  );
};

export default Movies;

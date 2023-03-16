import { MovieList } from 'components/MovieList';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'services/MoviesAPI';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  console.log('query!!!!!!!!!!!', query);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = ({ query }) => {
    const queryNormalise = query.toLowerCase().trim();
    uodateQueryStringr(queryNormalise);
    reset();
  };

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        console.log('firstQUERY', query);
        const { results } = await getMovies(query);
        setMovies(results);
        if (results.length === 0) {
          return await Promise.reject(new Error(`" ${query} "`));
        }
      } catch (error) {
        toast.error(`${error.message} not found!`);
        reset();
      }
    };
    fetchMovies();
  }, [query, reset]);

  const uodateQueryStringr = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  if (errors.query) {
    toast.error('This field is required!');
  }

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <input
              {...register('query', { required: 'query' })}
              placeholder=" enter movie name"
            />
          </label>
          <button type="submit">search</button>
        </div>
      </form>
      {movies && <MovieList movies={movies}></MovieList>}
    </main>
  );
};

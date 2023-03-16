import { MovieList } from 'components/MovieList';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'services/MoviesAPI';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const example = searchParams.get('query') ?? '';
  console.log('example', example);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async ({ query }) => {
    try {
      const queryNormalise = query.toLowerCase().trim();
      const { results } = await getMovies(queryNormalise);

      setMovies(results);
      uodateQueryStringr(queryNormalise);
      if (results.length === 0) {
        return await Promise.reject(new Error(`" ${query} "`));
      }
      reset();
    } catch (error) {
      console.log(error);
      toast.error(`${error.message} not found!`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      reset();
    }
  };

  const uodateQueryStringr = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  if (errors.query) {
    toast.error('This field is required!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
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

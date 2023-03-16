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
      reset();
    } catch (error) {
      console.log(error);
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
  };

  const uodateQueryStringr = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  // const notify = () =>
  //   ;
  // const notify = () => toast('This field is required!');

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('query', { required: 'query' })} />
          <button type="submit">search</button>
        </div>
        {errors.query &&
          toast.error('This field is required!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })}
        {/* {errors.query && <span>This field is required</span>} */}
      </form>
      {movies && <MovieList movies={movies}></MovieList>}
    </main>
  );
};

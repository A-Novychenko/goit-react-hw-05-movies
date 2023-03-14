import { MovieList } from 'components/MovieList';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getMovies } from 'services/MoviesAPI';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ example }) => {
    const { results } = await getMovies(example);
    setMovies(results);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="" {...register('example')} />

        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
      {movies && <MovieList movies={movies}></MovieList>}
    </main>
  );
};

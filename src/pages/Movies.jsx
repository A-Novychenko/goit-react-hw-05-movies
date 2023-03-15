import { MovieList } from 'components/MovieList';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'services/MoviesAPI';

export const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const example = searchParams.get('query') ?? '';

  const {
    register,
    handleSubmit,
    // formState: { errors },
    // formState: { isDirty, isValid, errors },
    // reset,
    // isSubmitSuccessful,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
    },
  });

  const onSubmit = async ({ example }) => {
    try {
      const { results } = await getMovies(example);
      setMovies(results);
      uodateQueryStringr(example);
      // reset('');
    } catch (error) {
      console.log(error);
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
  };

  // useEffect(() => {
  //   reset({
  //     data: 'test',
  //   });
  // }, [isSubmitSuccessful, reset]);

  const uodateQueryStringr = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={example} {...register('example')} />
        <input type="submit" />
      </form>
      {movies && <MovieList movies={movies}></MovieList>}
    </main>
  );
};

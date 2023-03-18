import { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { TbArrowBackUp } from 'react-icons/tb';
import { MovieDetails } from 'components/MovieDetails';
import { getMovie } from 'services/MoviesAPI';

export const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieItem = await getMovie(movieId);

        setMovie(movieItem);
      } catch (error) {
        console.log(error);
        //!!!!!!!!!!!!!!!!!!!!!!
      }
    };
    fetchMovie();
    return () => {
      'abort';
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    };
  }, [movieId]);
  console.log('tttttttttt', backLink);
  return (
    <>
      <Link to={backLink.current}>
        <TbArrowBackUp size={40} color={'green'} />
      </Link>
      {movie && <MovieDetails movie={movie} />}
    </>
  );
};

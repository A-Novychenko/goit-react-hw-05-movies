import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovie } from 'services/MoviesAPI';
import { getGenres, getUserScore, getImgPath, getYear } from 'utils';

export const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieItem = await getMovie(movieId);
        console.log('movieItem', movieItem);
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

  console.log('movie', movie);

  return (
    <>
      <button>Go back</button>
      {movie && (
        <>
          <section>
            <img src={getImgPath(movie.poster_path)} alt={movie.title} />
            <div>
              <h2>{`${movie.title}${getYear(movie.release_date)}`}</h2>
              <p>{`User score: ${getUserScore(movie.vote_average)}%`}</p>
              <div>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </div>
              <div>
                <h3>Genres</h3>
                <p>{getGenres(movie.genres)}</p>
              </div>
            </div>
          </section>
          <section>
            <h2>Addtional information</h2>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

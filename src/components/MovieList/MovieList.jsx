import { NavLink, useLocation } from 'react-router-dom';

export const MovieList = ({ movies, path = '' }) => {
  const location = useLocation();

  return (
    <>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`${path}${movie.id}`} state={{ from: location }}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

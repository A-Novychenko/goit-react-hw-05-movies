import { useLocation } from 'react-router-dom';
import { List, Item, NavLinkStyled } from './MovieList.styled';
import PropTypes from 'prop-types';

export const MovieList = ({ movies, path = '' }) => {
  const location = useLocation();

  return (
    <>
      {movies && (
        <List>
          {movies.map(movie => (
            <Item key={movie.id}>
              <NavLinkStyled
                to={`${path}${movie.id}`}
                state={{ from: location }}
              >
                {movie.title}
              </NavLinkStyled>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

MovieList.propTypes = {
  path: PropTypes.string,

  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
    }).isRequired
  ),
};

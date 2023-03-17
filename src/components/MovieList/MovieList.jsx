import { useLocation } from 'react-router-dom';
import { List, Item, NavLinkStyled } from './MovieList.styled';

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

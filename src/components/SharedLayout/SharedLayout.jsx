import { Outlet } from 'react-router-dom';
import { Header, NavLinkStyled, Container, Nav } from './SharedLayout.styled';

export const SharedLayout = () => (
  <>
    <Header>
      <Container>
        <Nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </Nav>
      </Container>
    </Header>
    <Outlet />
  </>
);

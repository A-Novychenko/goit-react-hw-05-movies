import { Suspense } from 'react';
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
    <Container>
      <main>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  </>
);

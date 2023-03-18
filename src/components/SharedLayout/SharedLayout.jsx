import { Suspense } from 'react';
import { Circles } from 'react-loader-spinner';
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
        <Suspense
          fallback={
            <Circles
              height="300"
              width="300"
              color="#4fa94d"
              ariaLabel="circles-loading"
              wrapperStyle={{
                display: 'flex',
                justifyContent: 'center',
                position: 'fixed',
                top: '150px',
                left: '50%',
                transform: 'translate(-50%)',
              }}
              wrapperClass=""
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </Container>
  </>
);

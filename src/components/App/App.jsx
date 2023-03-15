import { Cast } from 'components/Cast';
import { MovieDetail } from 'components/MovieDetail';
import { Reviews } from 'components/Reviews';
import { SharedLayout } from 'components/SharedLayout';
import { GlobalStyle } from 'constants/GlobalStyle';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />}></Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

import { MovieDetail } from 'components/MovieDetail';
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
          <Route path="movies" element={<Movies />}>
            <Route path="*" element={<MovieDetail />}></Route>
          </Route>
          <Route path="*" element={<Home />}></Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { getGenres, getUserScore, getImgPath, getYear } from 'utils';
import {
  Section,
  Title,
  Wrapper,
  Score,
  SubTitle,
  Inner,
  Img,
  NavLinkStyled,
  Btns,
  SubTitleCenter,
} from './MovieDetails.styled';

export const MovieDetails = ({ movie }) => {
  return (
    <>
      <Section>
        <Wrapper>
          <Img src={getImgPath(movie.poster_path)} alt={movie.title} />

          <div>
            <Title>{`${movie.title}${getYear(movie.release_date)}`}</Title>
            <Score>{`User score: ${getUserScore(movie.vote_average)}%`}</Score>
            <Inner>
              <SubTitle>Overview</SubTitle>
              <p>{movie.overview}</p>
            </Inner>
            <Inner>
              <SubTitle>Genres</SubTitle>
              <p>{getGenres(movie.genres)}</p>
            </Inner>
          </div>
        </Wrapper>
      </Section>
      <Section>
        <SubTitleCenter>
          <SubTitle>Addtional information</SubTitle>
        </SubTitleCenter>
        <Btns>
          <NavLinkStyled to="cast">Cast</NavLinkStyled>
          <NavLinkStyled to="reviews">Reviews</NavLinkStyled>
        </Btns>
        <Suspense fallback={<div>LOADING...</div>}>
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};

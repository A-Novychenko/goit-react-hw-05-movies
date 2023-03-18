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
import NoImg from '../../img/NoImg.png';
import { LineWave } from 'react-loader-spinner';

export const MovieDetails = ({
  movie: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
  return (
    <>
      <Section>
        <Wrapper>
          <Img
            // src={getImgPath(movie.poster_path)}
            src={poster_path ? getImgPath(poster_path) : NoImg}
            alt={title}
          />

          <div>
            <Title>{`${title}${
              release_date ? getYear(release_date) : ''
            }`}</Title>
            <Score>{`User score: ${getUserScore(vote_average)}%`}</Score>
            {overview && (
              <Inner>
                <SubTitle>Overview</SubTitle>
                <p>{overview}</p>
              </Inner>
            )}
            {genres.length !== 0 && (
              <Inner>
                <SubTitle>Genres</SubTitle>
                <p>{getGenres(genres)}</p>
              </Inner>
            )}
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
        <Suspense
          fallback={
            <LineWave
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="line-wave"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              firstLineColor=""
              middleLineColor=""
              lastLineColor=""
            />
          }
        >
          <Outlet />
        </Suspense>
      </Section>
    </>
  );
};

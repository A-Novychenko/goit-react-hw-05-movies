import { useEffect, useState } from 'react';
import { LineWave } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { getActors } from 'services/MoviesAPI';
import { getImgPath } from 'utils';
import NoImg from '../../img/NoImg.png';
import {
  List,
  Item,
  Img,
  Wrap,
  Name,
  Character,
  ImgWrap,
  Div,
} from './Cast.Styled';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setError(false);
    setIsloading(true);
    setActors(null);

    const abortController = new AbortController();

    const fetchActors = async () => {
      try {
        const actors = await getActors(movieId, abortController.signal);

        if (actors.cast.length === 0) {
          setError(true);
          return await Promise.reject(new Error(`" Not found "`));
        }
        setActors(actors.cast);
      } catch {
      } finally {
        setIsloading(false);
      }
    };
    fetchActors();

    return () => {
      abortController.abort();
    };
  }, [movieId]);
  console.log('actors', actors);

  return (
    <>
      {isLoading && (
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
      )}
      <List>
        {error && !isLoading && (
          <li>
            <span style={{ color: 'red' }}>Actor info not found</span>
          </li>
        )}
        {actors &&
          !isLoading &&
          actors.map(({ id, name, character, profile_path }) => (
            <Item key={id}>
              <Div>
                <ImgWrap>
                  <Img
                    src={profile_path ? getImgPath(profile_path) : NoImg}
                    alt={name}
                  />
                </ImgWrap>
                <Wrap>
                  <Name>{name}</Name>
                  <Character>{`Character ${character}`}</Character>
                </Wrap>
              </Div>
            </Item>
          ))}
      </List>
    </>
  );
};

export default Cast;

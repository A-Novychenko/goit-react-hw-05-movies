import { useEffect, useState } from 'react';
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

export const Cast = () => {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const actors = await getActors(movieId);
        setActors(actors.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchActors();

    return () => {
      //abort fetch
    };
  }, [movieId]);

  return (
    <List>
      {actors &&
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
  );
};

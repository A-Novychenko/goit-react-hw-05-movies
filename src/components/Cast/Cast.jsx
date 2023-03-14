import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'services/MoviesAPI';
import { getImgPath } from 'utils';
import NoImg from '../../img/NoImg.png';

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

  //   console.log('actors', actors);

  return (
    <ul>
      {actors &&
        actors.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={profile_path ? getImgPath(profile_path) : NoImg}
              alt={name}
              width="160"
            />
            <p>{name}</p>
            <p>{`Character ${character}`}</p>
          </li>
        ))}
    </ul>
  );
};

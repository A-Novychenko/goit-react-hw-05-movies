import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getActors } from 'services/MoviesAPI';
import { getImgPath } from 'utils';

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
        actors.map(actor => (
          <li key={actor.id}>
            <img
              src={getImgPath(actor.profile_path)}
              alt={actor.name}
              width="160"
            />
            <p>{actor.name}</p>
            <p>{`Character ${actor.character}`}</p>
          </li>
        ))}
    </ul>
  );
};

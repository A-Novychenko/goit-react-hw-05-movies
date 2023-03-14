import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/MoviesAPI';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews(movieId);
        console.log(' reviews.results', reviews.results);
        console.log('reviews', reviews);
        setReviews(reviews.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();

    return () => {
      //abort fetch
    };
  }, [movieId]);

  console.log('actors', reviews);

  return (
    <ul>
      {reviews && reviews.length === 0 && (
        <li key={1}>
          <p>There is no information about this film.</p>
        </li>
      )}
      {reviews &&
        reviews.length !== 0 &&
        reviews.map(({ content, author_details: { username } }, index) => (
          <li key={index}>
            <h3>{`Author ${username}`}</h3>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
};

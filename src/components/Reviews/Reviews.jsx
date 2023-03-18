import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/MoviesAPI';
import { List, Item, Title, Descr, NotFound } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews(movieId);
        console.log(' reviews.results', reviews.results);
        // console.log('reviews', reviews);
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

  return (
    <List>
      {reviews && reviews.length === 0 && (
        <Item key={'notFound'}>
          <NotFound>There is no information about this film.</NotFound>
        </Item>
      )}
      {reviews &&
        reviews.length !== 0 &&
        reviews.map(({ content, author_details: { username } }, index) => (
          <Item key={index}>
            <Title>{`Author ${username}`}</Title>
            <Descr>{content}</Descr>
          </Item>
        ))}
    </List>
  );
};
export default Reviews;

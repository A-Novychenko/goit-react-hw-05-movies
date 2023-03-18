import { useEffect, useState } from 'react';
import { LineWave } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/MoviesAPI';
import { List, Item, Title, Descr, NotFound } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setError(false);
    setIsloading(true);

    const abortController = new AbortController();

    const fetchReviews = async () => {
      try {
        const reviews = await getReviews(movieId, abortController.signal);

        if (reviews.results.length === 0) {
          setError(true);
          return await Promise.reject(new Error(`" Not found "`));
        }
        setReviews(reviews.results);
      } catch {
      } finally {
        setIsloading(false);
      }
    };
    fetchReviews();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

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
        {error && (
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
    </>
  );
};
export default Reviews;

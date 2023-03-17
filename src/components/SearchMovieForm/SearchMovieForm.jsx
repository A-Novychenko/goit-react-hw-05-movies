import { TfiSearch } from 'react-icons/tfi';
import { Form, Input, Button } from './SearchMovieForm.styled';

export const SearchMovieForm = ({ onSubmit, register }) => (
  <Form onSubmit={onSubmit}>
    <label>
      <Input
        {...register('query', { required: 'query' })}
        placeholder=" enter movie name"
      />
    </label>
    <Button type="submit">
      <TfiSearch size={20} />
    </Button>
  </Form>
);

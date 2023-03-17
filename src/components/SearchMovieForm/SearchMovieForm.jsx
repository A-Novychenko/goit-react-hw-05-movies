export const SearchMovieForm = ({ onSubmit, register }) => (
  <form onSubmit={onSubmit}>
    <div>
      <label>
        <input
          {...register('query', { required: 'query' })}
          placeholder=" enter movie name"
        />
      </label>
      <button type="submit">search</button>
    </div>
  </form>
);

import { NavLink } from 'react-router-dom';

export const MovieList = ({ movies, path = '' }) => {
  //возможно нужно добавить аборт фетча при анмаунте
  return (
    <>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`${path}${movie.id}`}>{movie.title}</NavLink>
              {/* <NavLink to={`movies/${movie.id}`}>{movie.title}</NavLink> */}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

//
// import { getMovieList } from 'services/MoviesAPI';

// export const MovieList = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const getMovie = async () => {
//       try {
//         const { results } = await getMovieList();
//         setMovies(results);
//       } catch (error) {
//         console.log(error);
//         //!!!!!!!!!!!!!!!!!!!!!!
//       }
//     };
//     getMovie();
//   }, []);
//   //возможно нужно добавить аборт фетча при анмаунте
//   return (
//     <ul>
//       {movies.map(movie => (
//         <li key={movie.id}>
//           <NavLink to={`movies/${movie.id}`}>{movie.title}</NavLink>
//         </li>
//       ))}
//     </ul>
//   );
// };

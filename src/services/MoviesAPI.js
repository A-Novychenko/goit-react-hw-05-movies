import axios from 'axios';
const API_KEY = '6b1b36ecf2f3f3c0d27307e18cbffcb3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMovies = async () => {
  try {
    const resp = await axios.get('trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    });

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

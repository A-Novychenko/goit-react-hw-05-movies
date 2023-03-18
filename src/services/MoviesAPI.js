import axios from 'axios';
const API_KEY = '6b1b36ecf2f3f3c0d27307e18cbffcb3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getMovieList = async signal => {
  try {
    const resp = await axios.get('trending/movie/day', {
      signal,
      params: {
        api_key: API_KEY,
      },
    });

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = async (id, signal) => {
  try {
    const resp = await axios.get(`movie/${id}`, {
      signal,
      params: {
        api_key: API_KEY,
      },
    });

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getActors = async (id, signal) => {
  try {
    const resp = await axios.get(`movie/${id}/credits`, {
      signal,
      params: {
        api_key: API_KEY,
      },
    });

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = async (id, signal) => {
  try {
    const resp = await axios.get(`movie/${id}/reviews`, {
      signal,
      params: {
        api_key: API_KEY,
      },
    });

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovies = async (query, signal) => {
  try {
    const resp = await axios.get(
      `
/search/movie`,

      {
        signal,
        params: {
          api_key: API_KEY,
          query,
        },
      }
    );

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

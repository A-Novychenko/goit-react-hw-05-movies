export const getGenres = genresObjs => {
  const genresArr = genresObjs.map(el => el.name);
  return genresArr.join(' ');
};

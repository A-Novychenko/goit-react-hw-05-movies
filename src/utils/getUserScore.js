export const getUserScore = score => {
  return Math.round(score * 10).toString();
  //   return (score * 10).toString();
};

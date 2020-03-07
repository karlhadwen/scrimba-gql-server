import { movies } from '../fixtures/movies';

export const resolvers = {
  Query: {
    allMovies: () => movies,
    movieById: (_, { id }) => movies?.find(movie => movie.id === parseInt(id))
  },
};

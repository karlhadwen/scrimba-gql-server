import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    allMovies: [Movie!]!
    movieById(id: ID!): Movie!
  }

  type Movie {
    id: ID!
    title: String!
    image: String!,
    desc: String!,
    alt: String,
    ctaText: String,
    rating: String
  }
`;

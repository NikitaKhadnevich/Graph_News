import { gql } from '@apollo/client';

export const GET_ALL_NEWS = gql`
  query myNews {
    news(limit: 50) {
      title
      content
      id
      created_at
    }
  }
`;

export const GET_ACCURATE_USER = gql`
  query getUser($id: ID) {
    getUser(id: $id) {
      id
      username
    }
  }
`;

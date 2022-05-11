import { gql } from '@apollo/client';

const GET_ALL_NEWS = gql`
  query myNews {
    news(limit: 50) {
      title
      content
      id
      created_at
      updated_at
    }
  }
`;

export default GET_ALL_NEWS;

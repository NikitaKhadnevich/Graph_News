import { gql } from '@apollo/client';

export const GET_ALL_NEWS = gql`
  query myNews {
    news {
      content
      id
      title
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

// query {
//   user("jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VyX2lkIjo2LCJuYW1lIjoiSmlsbCIsImlhdCI6MTUzMTU4MzUxMCwiZXhwIjoxNTMxNjY5OTEwLCJhdWQiOiJwb3N0Z3JhcGhpbGUiLCJpc3MiOiJwb3N0Z3JhcGhpbGUifQ.6aw1H2jlDUZmRxfHFM3hOGUv100L_iOHcQuVJJfVuMk"){
//     Posts{
//       name
//     }
//   }
// }

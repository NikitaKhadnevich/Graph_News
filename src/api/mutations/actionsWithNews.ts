import { gql } from '@apollo/client';

export const ADD_FRESH_NEWS = gql`
  mutation added_fresh_news($title: String, $content: String) {
    insert_news_one(object: { title: $title, content: $content }) {
      content
      id
    }
  }
`;

export const DELETE_CURRENT_NEWS = gql`
  mutation delete_news($id: uuid! = "") {
    delete_news_by_pk(id: $id) {
      title
    }
  }
`;

export const UPDATE_CURRENT_NEWS = gql`
  mutation update_news($id: uuid! = "", $title: String, $content: String) {
    update_news_by_pk(pk_columns: { id: $id }, _set: { title: $title, content: $content }) {
      id
    }
  }
`;

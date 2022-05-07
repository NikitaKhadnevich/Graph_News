import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from '@apollo/client';

import 'index.css';
import App from 'App';
import theme from 'themeSettings';
import { getAuthResponseData } from 'utils/helpers/getAuthResponseData';
import { API } from './constants/routes';

const NEWS_LINK = 'https://graphql.sample.dev.simple-apps.ru';

const httpLink = new HttpLink({
  uri: `${NEWS_LINK}${API.getData}`,
});
const authMiddleware = new ApolloLink((operation, forward) => {
  const parseToken: string | undefined = getAuthResponseData();
  if (parseToken) {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${parseToken}`,
      },
    });
  }
  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

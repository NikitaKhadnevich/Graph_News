export const PATHS: {
  home: string;
  news: string;
  signIn: string;
} = {
  home: '/',
  news: '/news',
  signIn: '/signin',
};

export const API: {
  getToken: string;
  getData: string;
  logOut: string;
} = {
  getToken: '/api/auth/login',
  getData: '/v1/graphql',
  logOut: 'api/account/logout',
};

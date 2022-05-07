/* eslint-disable import/prefer-default-export */
import axios, { AxiosInstance } from 'axios';

import { getAuthResponseData } from 'utils/helpers/getAuthResponseData';

export const apiClientWrapper = (): AxiosInstance => {
  const parseToken: string | undefined = getAuthResponseData();
  return parseToken
    ? axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL,
        headers: {
          authorization: `Bearer ${parseToken}`,
        },
      })
    : axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL,
      });
};

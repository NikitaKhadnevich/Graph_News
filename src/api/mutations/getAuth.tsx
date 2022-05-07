/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-const */
import { useQuery, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';

import { apiClientWrapper } from 'api/baseInstance';
import { API } from 'constants/routes';
import { COOKIE_VALUES, REQUEST_ERRORS } from 'constants/authConstants';

const getAuth = async (initialData: any): Promise<Array<[]>> => {
  const apiClient = apiClientWrapper();
  try {
    const response = await apiClient.post(API.getToken, initialData);
    let tokenResponse = response.data;
    const accessToken = JSON.stringify(tokenResponse.jwt_token);
    const userId = JSON.stringify(tokenResponse.jwt_expires_in);
    Cookies.set(COOKIE_VALUES.uniqAccessToken, accessToken, { secure: true });
    Cookies.set(COOKIE_VALUES.uniqUserId, userId, { secure: true });
    return tokenResponse;
  } catch (error) {
    throw new Error(`${REQUEST_ERRORS.postError}`);
  }
};

export default getAuth;

/* eslint-disable no-alert */
import Cookies from 'js-cookie';

import { apiClientWrapper } from 'api/baseInstance';
import { API } from 'constants/routes';
import { COOKIE_VALUES, REQUEST_ERRORS } from 'constants/authConstants';

const getAuth = async (
  initialData: {
    email: string;
    password: string;
  },
  openNews: (status: boolean) => void,
): Promise<Array<[]>> => {
  const START_LOADER = true;
  const FINISH_LOADER = false;
  const apiClient = apiClientWrapper();
  openNews(START_LOADER);
  try {
    const response = await apiClient.post(API.getToken, initialData);
    const tokenResponse = response.data;
    const accessToken = JSON.stringify(tokenResponse.jwt_token);
    const userId = JSON.stringify(tokenResponse.jwt_expires_in);
    Cookies.set(COOKIE_VALUES.uniqAccessToken, accessToken, { secure: true });
    Cookies.set(COOKIE_VALUES.uniqUserId, userId, { secure: true });
    openNews(FINISH_LOADER);
    return tokenResponse;
  } catch (error) {
    openNews(FINISH_LOADER);
    alert(`${REQUEST_ERRORS.noUser}`);
    throw new Error(`${REQUEST_ERRORS.noUser}`);
  }
};

export default getAuth;

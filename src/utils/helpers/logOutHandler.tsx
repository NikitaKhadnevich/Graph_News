/* eslint-disable import/prefer-default-export */
import Cookies from 'js-cookie';
import { COOKIE_VALUES } from 'constants/authConstants';

export const logOutHandler = (): void => {
  Cookies.remove(COOKIE_VALUES?.uniqAccessToken);
  Cookies.remove(COOKIE_VALUES?.uniqUserId);
};

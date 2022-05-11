interface IRequestErrors {
  readonly [key: string]: string;
}
interface ICookiesTypes {
  readonly [key: string]: string;
}

const REQUEST_ERRORS: IRequestErrors = {
  getError: 'Smth went wrong - 404',
  postError: 'Smth went wrong - 500',
  noUser: 'There is no User Exist',
};

const COOKIE_VALUES: ICookiesTypes = {
  uniqAccessToken: 'accessToken',
  uniqUserId: 'userId',
  isLogOut: 'isLogOut',
};

export { REQUEST_ERRORS, COOKIE_VALUES };

/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';

import signInSchema from 'validations/signInValidationSchema';
import SignIn from './SignIn';
import getAuth from '../../api/mutations/getAuth';
import { PATHS } from '../../constants/routes';
import { COOKIE_VALUES } from '../../constants/authConstants';

interface SignInFields {
  email: string;
  password: string;
}

const initSignInvalue: SignInFields = {
  email: '',
  password: '',
};

const SignInContainer: React.FC = () => {
  const navigateTo = useNavigate();
  const [isAuthing, setIsAuth] = useState<boolean>(false);
  const FIELD_TOUCHED = true;
  const FIELD_VALIDATE = false;

  const openNews = (status: boolean) => {
    setIsAuth(status);
  };

  const formik = useFormik({
    initialValues: initSignInvalue,
    validationSchema: signInSchema,
    onSubmit: (values): void => {
      getAuth(values, openNews);
    },
  });

  useEffect(() => {
    const token: string | undefined = Cookies.get(COOKIE_VALUES?.uniqAccessToken);
    token ? navigateTo(PATHS.news) : null;
  }, [isAuthing]);

  const warningHandler = (name: string, e: string) => {
    formik.handleChange(e);
    formik.setFieldTouched(name, FIELD_TOUCHED, FIELD_VALIDATE);
  };

  return (
    <FormikProvider value={formik}>
      <SignIn formik={formik} warningHandler={warningHandler} isAuthing={isAuthing} />
    </FormikProvider>
  );
};

export default SignInContainer;

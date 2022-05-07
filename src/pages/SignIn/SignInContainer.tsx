/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useFormik, FormikProvider } from 'formik';

import signInSchema from 'validations/signInValidationSchema';
import SignIn from './SignIn';

interface SignInFields {
  login: string;
  password: string;
}

const initSignInvalue: SignInFields = {
  login: '',
  password: '',
};

const SignInContainer: React.FC = () => {
  // const { mutateAsync, isLoading } = useGetAuth();
  const FIELD_TOUCHED = true;
  const FIELD_VALIDATE = false;

  const formik = useFormik({
    initialValues: initSignInvalue,
    validationSchema: signInSchema,
    onSubmit: (values): void => {
      console.log(values);
    },
  });

  const warningHandler = (name: string, e: string) => {
    formik.handleChange(e);
    formik.setFieldTouched(name, FIELD_TOUCHED, FIELD_VALIDATE);
  };

  return (
    <FormikProvider value={formik}>
      <SignIn formik={formik} warningHandler={warningHandler} />
    </FormikProvider>
  );
};

export default SignInContainer;

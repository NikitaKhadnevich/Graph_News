/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { TextField } from 'components/TextField';
import { SignTypes } from 'types/signIn';
import { buttonSpinner } from 'animations';
import ButtonLoader from 'components/ButtonLoader';

import ErrorsMessenger from './ErrorsMessager';
import {
  SignWrapper,
  FormBox,
  ItemsBox,
  GridWrapper,
  GridSignInput,
  GridButton,
  SignButton,
  SignMain,
  GridError,
} from './styled';

const SignIn = ({ formik, warningHandler, getFieldName }: SignTypes): JSX.Element => {
  const {
    values: { login, password },
    handleSubmit,
    handleBlur,
    errors,
    touched,
  } = formik;

  console.log('values');

  return (
    <SignMain>
      <SignWrapper>
        <FormBox>
          <ItemsBox component="form" onSubmit={handleSubmit}>
            <GridWrapper container spacing={1}>
              <GridSignInput onClick={getFieldName} id="login" item xs={12}>
                <TextField
                  value={login}
                  label="Login"
                  warningHandler={warningHandler}
                  handleBlur={handleBlur}
                  error={errors}
                  id="login"
                />
              </GridSignInput>
              <GridSignInput onClick={getFieldName} id="password" item xs={12}>
                <TextField
                  value={password}
                  label="Password"
                  warningHandler={warningHandler}
                  handleBlur={handleBlur}
                  error={errors}
                  id="password"
                  type="password"
                />
              </GridSignInput>
              <GridError>
                <ErrorsMessenger error={errors} touched={touched} />
              </GridError>
              <GridButton item xs={12}>
                {/* {isLoading ? (
                  <SignButton fullWidth type="submit" variant="outlined" disabled>
                    <ButtonLoader buttonSpinner={buttonSpinner} />
                  </SignButton>
                ) : ( */}
                <SignButton fullWidth type="submit" variant="contained" color="primary">
                  LOG IN
                </SignButton>
                {/* )} */}
              </GridButton>
            </GridWrapper>
          </ItemsBox>
        </FormBox>
      </SignWrapper>
    </SignMain>
  );
};

export default SignIn;

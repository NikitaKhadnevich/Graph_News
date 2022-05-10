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

const SignIn = ({ formik, warningHandler }: SignTypes): JSX.Element => {
  const {
    values: { email, password },
    handleSubmit,
    handleBlur,
    errors,
    touched,
  } = formik;

  return (
    <SignMain>
      <SignWrapper>
        <FormBox>
          <ItemsBox component="form" onSubmit={handleSubmit}>
            <GridWrapper container spacing={1}>
              <GridSignInput id="email" item xs={12}>
                <TextField
                  value={email}
                  label="Email"
                  warningHandler={warningHandler}
                  handleBlur={handleBlur}
                  error={errors}
                  id="email"
                />
              </GridSignInput>
              <GridSignInput id="password" item xs={12}>
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

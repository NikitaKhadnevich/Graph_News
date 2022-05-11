/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import ITextFieldTypes from 'types/signErrorTypes';
import ErrorsMessager from './ErrorsMessenger';

const ErrorsMessenger = ({ error, touched }: ITextFieldTypes): JSX.Element => {
  const [keysQueue, setQueue] = useState<string[] | never[]>([]);
  const [fieldKey, setFiledKey] = useState<string | undefined>();
  const FIELD_NAME = {
    loginField: 'email',
    passwordField: 'password',
  };

  const getCurrentError = (): string[] | never[] => {
    const touchedKeys = Object.keys(touched);
    let errorKeys = Object.keys(error);
    errorKeys = errorKeys.filter((key) => touchedKeys.includes(key));
    return errorKeys;
  };

  useEffect(() => {
    const currentErrors = getCurrentError();
    setQueue(currentErrors);
  }, [error, touched]);

  useEffect(() => {
    const currentName = keysQueue.shift();
    setFiledKey(currentName);
  }, [error, keysQueue]);

  return (
    <ErrorsMessager
      identificator={fieldKey}
      loginFiled={FIELD_NAME.loginField}
      passwordField={FIELD_NAME.passwordField}
    />
  );
};

export default ErrorsMessenger;

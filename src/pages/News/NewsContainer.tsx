/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';
import { Button } from '@mui/material';
import moment from 'moment';

import { useFormik, FormikProvider } from 'formik';
import { NewsSchema } from 'validations/signInValidationSchema';
import { GET_ALL_NEWS } from 'api/query/getNews';
import { ADD_FRESH_NEWS } from 'api/mutations/getAuth';
import AddNewsBoxContainer from '../../components/AddNewsBox/AddNewsBoxContainer';

import News from './News';
import { NewsField } from '../../types/formikFields';

const initSignInvalue: NewsField = {
  title: '',
  new_title: '',
  content: '',
  new_content: '',
};

const NewsContainer: React.FC = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_NEWS);
  const [addFreshNews] = useMutation(ADD_FRESH_NEWS);
  const [isFreshNews, setFreshNews] = useState<string>('');

  return (
    <>
      <AddNewsBoxContainer />
      <News newsList={data?.news} loading={loading} refetch={refetch} />
    </>
  );
};

export default NewsContainer;

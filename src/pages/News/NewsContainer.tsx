/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useFormik, FormikProvider } from 'formik';
import { NewsSchema } from 'validations/signInValidationSchema';
import { GET_ALL_NEWS } from 'api/query/getNews';
import AddNewsBox from '../../components/AddNewsBox/AddNewsBox';

import News from './News';

interface NewsField {
  title: string;
  new_title: string;
  content: string;
  new_content: string;
}

const initSignInvalue: NewsField = {
  title: '',
  new_title: '',
  content: '',
  new_content: '',
};

const NewsContainer: React.FC = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_NEWS);

  const formikNews = useFormik({
    initialValues: initSignInvalue,
    onSubmit: (values, { resetForm }): void => {
      const mutableValues = {
        ...values,
        date: new Date(),
      };
      resetForm();
      console.log('mutableValues', mutableValues);
    },
  });

  const warningHandler = (name: string, e: string) => {
    formikNews.handleChange(e);
  };

  return (
    <FormikProvider value={formikNews}>
      <AddNewsBox warningHandler={warningHandler} formikNews={formikNews} />
      <News
        warningHandler={warningHandler}
        formikNews={formikNews}
        newsList={data?.news}
        loading={loading}
        refetch={refetch}
      />
    </FormikProvider>
  );
};

export default NewsContainer;

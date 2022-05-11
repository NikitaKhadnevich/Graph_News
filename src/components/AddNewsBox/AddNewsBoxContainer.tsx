/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';

import { useMutation, useQuery, gql } from '@apollo/client';
import { Button } from '@mui/material';
import moment from 'moment';

import { useFormik, FormikProvider } from 'formik';
import { ADD_FRESH_NEWS } from 'api/mutations/actionsWithNews';
import { LOADER } from 'constants/loaderTypes';
import AddNewsBox from './AddNewsBox';
import Loader from '../Loader';
import { NewsField } from '../../types/formikFields';

const initSignInvalue: NewsField = {
  title: '',
  new_title: '',
  content: '',
  new_content: '',
};

interface INews {
  loading?: boolean;
  refetch: () => void;
}

const AddNewsBoxContainer = ({ refetch }: INews) => {
  const [addFreshNews, { data, loading, error }] = useMutation(ADD_FRESH_NEWS);

  async function addedNews(title: string, content: string) {
    try {
      await addFreshNews({
        variables: {
          title,
          content,
        },
      });
      await refetch();
    } catch (err) {
      console.log('We have some error on Added News');
    }
  }

  const formikNews = useFormik({
    initialValues: initSignInvalue,
    onSubmit: (values, { resetForm }): void => {
      const mutableValues = {
        ...values,
        date: new Date(),
      };
      const freshNews = {
        title: mutableValues.new_title,
        content: mutableValues.new_content,
      };

      addedNews(freshNews.title, freshNews.content);
      resetForm();
    },
  });

  return (
    <FormikProvider value={formikNews}>
      {loading ? (
        <Loader color="primary" type={LOADER.content} />
      ) : (
        <AddNewsBox formikNews={formikNews} />
      )}
    </FormikProvider>
  );
};

export default AddNewsBoxContainer;

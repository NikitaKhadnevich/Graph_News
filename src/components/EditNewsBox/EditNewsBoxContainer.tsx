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
import { ADD_FRESH_NEWS } from 'api/mutations/getAuth';
import EditNewsBox from './EditNewsBox';
import { NewsField } from '../../types/formikFields';
import { INewsTypes } from '../../types/news';

const initSignInvalue: NewsField = {
  title: '',
  new_title: '',
  content: '',
  new_content: '',
};

interface INews {
  news: {
    [key: string]: string;
  };
  loading?: boolean;
  refetch?: () => void;
  openChanger: () => void;
  backgroundColor?: string;
}

const EditNewsBoxContainer = ({ loading, refetch, news, openChanger }: INews) => {
  const [addFreshNews] = useMutation(ADD_FRESH_NEWS);

  async function addedNews(title: string, content: string) {
    try {
      await addFreshNews({
        variables: {
          title,
          content,
        },
      });
    } catch (error) {
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
      <EditNewsBox news={news} formikNews={formikNews} openChanger={openChanger} />;
    </FormikProvider>
  );
};

export default EditNewsBoxContainer;

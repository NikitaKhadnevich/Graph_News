/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';

import { useFormik, FormikProvider } from 'formik';
import { DELETE_CURRENT_NEWS, UPDATE_CURRENT_NEWS } from 'api/mutations/actionsWithNews';
import { INewsHelper } from 'types/news';
import EditNewsBox from './EditNewsBox';
import { NewsField } from '../../types/formikFields';

const initSignInvalue: NewsField = {
  title: '',
  new_title: '',
  content: '',
  new_content: '',
};

const EditNewsBoxContainer = ({ refetch, news, openChanger, isFetchingAction }: INewsHelper) => {
  const [deleteCurrentNews, { data: dataDelete, loading: loadingDelete, error: errorDelete }] =
    useMutation(DELETE_CURRENT_NEWS);
  const [updateCurrentNews, { data: dataUpdate, loading: loadingUpdate, error: errorUpdate }] =
    useMutation(UPDATE_CURRENT_NEWS);

  async function updateNews(
    e: React.MouseEvent<Element, MouseEvent>,
    title: string,
    content: string,
  ) {
    e.preventDefault();
    const updated_at = new Date();
    const { id } = e.target as HTMLElement;
    try {
      await updateCurrentNews({
        variables: {
          id,
          title,
          content,
          updated_at,
        },
      });
      await refetch();
    } catch (error) {
      console.log(errorUpdate);
    }
  }

  async function deleteNews(e: React.MouseEvent<Element, MouseEvent>) {
    e.preventDefault();
    const { id } = e.target as HTMLElement;
    try {
      await deleteCurrentNews({
        variables: {
          id,
        },
      });
      await refetch();
    } catch (error) {
      console.log(errorDelete);
    }
  }

  const formikNews = useFormik({
    initialValues: initSignInvalue,
    onSubmit: (values, { resetForm }): void => {
      resetForm();
    },
  });

  useEffect(() => {
    loadingDelete || loadingUpdate ? isFetchingAction(true) : null;
  }, [loadingDelete, loadingUpdate]);

  return (
    <>
      <FormikProvider value={formikNews}>
        <EditNewsBox
          updateNews={updateNews}
          deleteNews={deleteNews}
          news={news}
          formikNews={formikNews}
          openChanger={openChanger}
        />
      </FormikProvider>
    </>
  );
};

export default EditNewsBoxContainer;

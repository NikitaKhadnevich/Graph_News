/* eslint-disable no-console */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/react-in-jsx-scope */
import { useMutation } from '@apollo/client';

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
  const [addFreshNews, { loading, error: addNewsError }] = useMutation(ADD_FRESH_NEWS);

  async function addedNews(title: string, content: string) {
    try {
      await addFreshNews({
        variables: {
          title,
          content,
        },
      });
      refetch();
    } catch (err) {
      console.log(addNewsError);
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

/* eslint-disable react/require-default-props */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { LOADER } from 'constants/loaderTypes';
import Loader from '../../components/Loader';
import { NewsWrapper } from './styled';
import NewsBlock from './NewsBlock';

interface INews {
  newsList: Array<{
    [key: string]: string;
  }>;
  loading?: boolean;
  refetch: () => void;
}

const News = ({ newsList, loading, refetch }: INews): JSX.Element => (
  <NewsWrapper>
    {loading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : newsList ? (
      <NewsBlock newsList={newsList} refetch={refetch} loading={loading} />
    ) : null}
  </NewsWrapper>
);
export default News;

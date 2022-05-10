/* eslint-disable react/require-default-props */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense } from 'react';
import { LOADER } from 'constants/loaderTypes';
import Loader from '../../components/Loader';
import { NewsWrapper } from './styled';
import NewsBlock from './NewsBlock';
import { INewsTypes } from '../../types/news';

interface INews {
  newsList: Array<{
    [key: string]: string;
  }>;
  loading?: boolean;
  refetch?: () => void;
}

const News = ({ newsList, loading, refetch }: INews): JSX.Element => (
  <NewsWrapper>
    {loading ? (
      <Loader color="primary" type={LOADER.content} />
    ) : newsList ? (
      <NewsBlock newsList={newsList} refetch={refetch} />
    ) : null}
  </NewsWrapper>
);
export default News;

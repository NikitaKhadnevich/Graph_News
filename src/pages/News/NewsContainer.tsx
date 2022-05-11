import React from 'react';
import { useQuery } from '@apollo/client';

import GET_ALL_NEWS from 'api/query/getNews';
import AddNewsBoxContainer from '../../components/AddNewsBox/AddNewsBoxContainer';

import News from './News';

const NewsContainer: React.FC = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_NEWS);

  return (
    <>
      <AddNewsBoxContainer refetch={refetch} loading={loading} />
      <News newsList={data?.news} loading={loading} refetch={refetch} />
    </>
  );
};

export default NewsContainer;

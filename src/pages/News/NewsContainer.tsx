import React from 'react';
import { useQuery } from '@apollo/client';

import GET_ALL_NEWS from 'api/query/getNews';
import AddNewsBoxContainer from 'components/AddNewsBox/AddNewsBoxContainer';
import Header from 'components/Header/Header';
import News from './News';
import { NewsContainerWrapper } from './styled';

const NewsContainer: React.FC = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_NEWS);

  return (
    <>
      <NewsContainerWrapper>
        <Header />
        <AddNewsBoxContainer refetch={refetch} loading={loading} />
        <News newsList={data?.news} loading={loading} refetch={refetch} />
      </NewsContainerWrapper>
    </>
  );
};

export default NewsContainer;

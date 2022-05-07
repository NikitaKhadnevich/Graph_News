/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_ALL_NEWS } from 'api/query/getNews';
import News from './News';

interface INews {
  data: any;
}

const NewsContainer: React.FC = () => {
  const { data, loading, refetch } = useQuery(GET_ALL_NEWS);

  console.log('data', data);

  return <News data="dsds" />;
};

export default NewsContainer;

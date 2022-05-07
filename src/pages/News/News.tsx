/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface INews {
  data: any;
}

const News = ({ data }: INews): JSX.Element => {
  console.log('data', data);

  return (
    <div>
      <p>See news</p>
    </div>
  );
};

export default News;

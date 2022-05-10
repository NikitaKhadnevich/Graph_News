/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';

import { ButtonShow, ButtonBox, EditTextField } from './styled';
import { INewsTypes } from '../../types/news';

interface INews extends INewsTypes {
  news: {
    [key: string]: string;
  };
  loading?: boolean;
  refetch?: () => void;
  openChanger: () => void;
}

const EditNewsBox = ({ news, formikNews, openChanger }: INews) => {
  const { handleSubmit, handleChange } = formikNews;

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <EditTextField defaultValue={news.title} handleChange={handleChange} id="title" />
      <EditTextField defaultValue={news.content} handleChange={handleChange} id="content" />
      <ButtonBox>
        <ButtonShow type="submit" color="secondary" id={news.id} variant="contained">
          Edit
        </ButtonShow>
        <ButtonShow color="primary" id={news.id} variant="contained">
          Delete
        </ButtonShow>
        <ButtonShow color="warning" id={news.id} onClick={openChanger} variant="outlined">
          Hide
        </ButtonShow>
      </ButtonBox>
    </Box>
  );
};

export default EditNewsBox;

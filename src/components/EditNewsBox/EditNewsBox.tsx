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
  updateNews: (e: any, title: string, content: string) => Promise<void>;
  deleteNews: (e: any) => Promise<void>;
}

const EditNewsBox = ({ news, formikNews, openChanger, deleteNews, updateNews }: INews) => {
  const {
    handleSubmit,
    handleChange,
    values: { title, content },
  } = formikNews;

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <EditTextField defaultValue={news.title} handleChange={handleChange} id="title" />
      <EditTextField defaultValue={news.content} handleChange={handleChange} id="content" />
      <ButtonBox>
        <ButtonShow
          type="submit"
          color="secondary"
          id={news.id}
          variant="contained"
          onClick={(e) => updateNews(e, title, content)}
        >
          Edit
        </ButtonShow>
        <ButtonShow color="primary" id={news.id} variant="contained" onClick={(e) => deleteNews(e)}>
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

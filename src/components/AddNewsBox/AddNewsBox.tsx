/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';

import { ButtonShow, ButtonBox, AddNewsMainBox, AddTextField } from './styled';
import { TextField } from '../TextField';
import { INewsTypes } from '../../types/news';

interface INews extends INewsTypes {
  loading?: boolean;
  refetch?: () => void;
}

export default function AddNewsBox({ formikNews, warningHandler }: INews) {
  return (
    <AddNewsMainBox>
      <Box component="form" onSubmit={formikNews.handleSubmit}>
        <AddTextField
          value={formikNews.values.new_title}
          warningHandler={warningHandler}
          id="new_title"
          label="Title"
        />
        <AddTextField
          value={formikNews.values.new_content}
          warningHandler={warningHandler}
          id="new_content"
          label="Content"
        />
        <ButtonBox>
          <ButtonShow type="submit" color="primary" variant="contained">
            Add
          </ButtonShow>
        </ButtonBox>
      </Box>
    </AddNewsMainBox>
  );
}

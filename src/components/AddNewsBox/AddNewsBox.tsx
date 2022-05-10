/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';

import { ButtonShow, ButtonBox, AddNewsMainBox, AddTextField } from './styled';
import { INewsTypes } from '../../types/news';

interface INews extends INewsTypes {
  loading?: boolean;
  refetch?: () => void;
}

const AddNewsBox = ({ formikNews }: INews) => {
  const {
    values: { new_title, new_content },
    handleSubmit,
    handleChange,
  } = formikNews;

  return (
    <AddNewsMainBox>
      <Box component="form" onSubmit={handleSubmit}>
        <AddTextField value={new_title} handleChange={handleChange} id="new_title" label="Title" />
        <AddTextField
          value={new_content}
          handleChange={handleChange}
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
};

export default AddNewsBox;

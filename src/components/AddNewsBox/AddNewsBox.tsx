/* eslint-disable react/react-in-jsx-scope */
import { Box } from '@material-ui/core';

import { ButtonShow, ButtonBox, AddNewsMainBox, AddTextField } from './styled';
import { INewsTypes } from '../../types/news';

const AddNewsBox = ({ formikNews }: INewsTypes) => {
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
          <ButtonShow
            type="submit"
            color="primary"
            variant="contained"
            disabled={!new_title || !new_content}
          >
            Add
          </ButtonShow>
        </ButtonBox>
      </Box>
    </AddNewsMainBox>
  );
};

export default AddNewsBox;

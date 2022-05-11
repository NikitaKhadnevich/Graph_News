/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable sonarjs/no-duplicate-string */
import { styled } from '@mui/styles';
import { Grid, Box, Typography } from '@mui/material';
import Button from 'components/Button/Button';
import { TextField } from 'components/TextField';

import theme from 'themeSettings';

interface IColor {
  color?: string;
  background?: string;
}

export const EditTextField = styled(TextField)({
  margin: '5px 0px!important',
  padding: '0 5px !important',
  boxSizing: 'border-box',
  '& label': {
    fontFamily: '"Ubuntu", sans-serif',
    color: '#C6C6C9 !important',
    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: 400,
    maxHeight: '30px !important',
  },
  '& input': {
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: '"Ubuntu", sans-serif',
    color: '#1D1D1D',
    background: theme.palette.secondary.main,
    borderRadius: '5px',
    maxHeight: '30px !important',
  },
  '& input + fieldset': {
    border: '1px solid #B7BECA !important',
    borderColor: '1px solid #B7BECA !important',
  },
  '& input:focus + fieldset': {
    borderColor: '#B7BECA !important',
    border: '1px solid #B7BECA !important',
  },
  '& input:hover + fieldset': {
    borderColor: '#B7BECA !important',
    border: '1px solid #B7BECA !important',
  },
});

export const ButtonBox = styled(Box)({
  height: 'fit-content',
  display: 'flex',
  width: '100%',
  justifyContent: 'center !important',
});

export const ButtonShow = styled(Button)<IColor>(({ color }) => ({
  width: '100px !important',
  fontSize: '14px !important',
  fontWeight: '400 !important',
  margin: '5px !important',
  height: '30px',
  ...(color && {
    backgroundColor: `${color} !important`,
  }),
  '&:hover': {
    color: `${theme.palette.primary.main} !important`,
  },
}));

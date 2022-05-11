/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable sonarjs/no-duplicate-string */
import { styled } from '@mui/styles';
import { Grid, Box, Typography } from '@mui/material';
import Button from 'components/Button/Button';
import theme from 'themeSettings';
import { TextField } from '../TextField';

interface IColor {
  color?: string;
  background?: string;
}

export const AddNewsMainBox = styled(Box)({
  width: '77%',
  margin: '0 auto',
  marginTop: '20px',
  marginBottom: '20px',
});

export const AddTextField = styled(TextField)({
  paddingBottom: '10px !important',
  '& label': {
    fontFamily: '"Ubuntu", sans-serif',
    color: '#C6C6C9 !important',
    fontSize: '16px',
    lineHeight: '25px',
    fontWeight: 400,
    height: '40px !important',
  },
  '& input': {
    fontSize: '18px',
    fontWeight: 400,
    fontFamily: '"Ubuntu", sans-serif',
    color: '#1D1D1D',
    background: theme.palette.secondary.main,
    borderRadius: '5px',
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

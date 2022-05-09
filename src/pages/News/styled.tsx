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

export const NewsWrapper = styled(Box)({
  height: '100%',
  minHeight: '100vh',
  width: '100%',
  display: 'grid',
  padding: '0',
  background: theme.palette.secondary.main,
});

export const NewsBlockGrid = styled(Grid)({
  height: '100%',
  width: '100%',
  display: 'grid',
  justifyContent: 'center',
  justifyItems: 'center',
  background: 'lime',
  gridGap: '20px',
  backgroundColor: theme.palette.text.secondary,
});

export const NewsItemBlock = styled(Grid)({
  height: 'fit-content !important',
  minHeight: '150px',
  width: '100%',
  justifyContent: 'space-between',
  justifyItems: 'center',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '7px',
  alignContent: 'space-between',
});

export const InfoNewsBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '120px',
  overflow: 'hidden',
});

export const DateNewsBlock = styled('div')({
  display: 'block',
  alignSelf: 'end',
  background: 'red',
  height: '30px',
});

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

export const TitileText = styled(Typography)({
  padding: '5px',
  fontSize: '16px !important',
  wordWrap: 'break-word',
});

export const DescriptionText = styled(Typography)({
  padding: '10px 5px 5px 5px',
  fontSize: '14px !important',
  wordWrap: 'break-word',
});

export const TimeText = styled(Typography)({
  padding: '15px 5px 5px 5px',
  fontSize: '10px !important',
  wordWrap: 'break-word',
});

export const ChangeInputShow = styled(Box)({
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'space-between !important',
  marginLeft: '-30px !important important',
});

export const ChangeInputHide = styled(Box)({
  maxHeight: '200px !important',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between !important',
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
}));

const GridSignInput = styled(Grid)<IColor>(({ color }) => ({
  margin: '0 !important ',
  padding: '0px !important',
  boxSizing: 'border-box',
  marginBottom: '25px !important',
  height: '53px !important',
  maxHeight: '53px !important',
  minHeight: '53px !important',
  '& label': {
    fontFamily: '"Ubuntu", sans-serif',
    color: '#C6C6C9 !important',
    ...(color && {
      color: `${color} !important`,
    }),
    fontSize: '18px',
    lineHeight: '21px',
    fontWeight: 400,
    height: '53px !important',
    maxHeight: '53px !important',
    minHeight: '53px !important',
  },
  '& input': {
    fontSize: '18px',
    fontWeight: 400,
    fontFamily: '"Ubuntu", sans-serif',
    padding: '13.57px 14px',
    color: '#1D1D1D',
    background: '#E5EEFD',
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
  [theme.breakpoints.down('xs')]: {
    boxSizing: 'border-box',
    width: '100%',
    height: '48px !important',
    maxHeight: '48px !important',
    minHeight: '48px !important',
    '& label': {
      height: '48px !important',
      maxHeight: '48px !important',
      minHeight: '48px !important',
    },
    '& input': {
      width: '100%',
      boxSizing: 'border-box',
      height: '48px !important',
      maxHeight: '48px !important',
      minHeight: '48px !important',
    },
  },
}));

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

export const NewsContainerWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '0px !important',
  minHeight: '100vh',
  background: theme.palette.primary.light,
});

export const NewsWrapper = styled(Box)({
  height: '100%',
  minHeight: 'fit-content',
  width: '95%',
  margin: '0 auto',
  padding: '0',
});

export const NewsBlockGrid = styled(Grid)({
  height: '100%',
  display: 'grid',
  justifyContent: 'center',
  justifyItems: 'center',
  gridGap: '20px',
  paddingBottom: '20px',
});

export const NewsItemBlock = styled(Grid)({
  height: 'fit-content !important',
  padding: '15px',
  minHeight: '100px',
  justifyContent: 'space-between',
  justifyItems: 'center',
  borderRadius: '7px',
  alignContent: 'space-between',
  maxWidth: '320px !important',
  background: theme.palette.primary.dark,
});

export const InfoNewsBlock = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  height: '120px',
});

export const DateNewsBlock = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignSelf: 'end',
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
  fontSize: '16px !important',
  wordWrap: 'break-word',
  height: '25px',
});

export const DescriptionText = styled(Typography)({
  fontSize: '12px !important',
  wordWrap: 'break-word',
  overflow: 'hidden',
});

export const TimeText = styled(Typography)({
  padding: '10px 3px 3px 5px',
  fontSize: '8px !important',
  wordWrap: 'break-word',
  color: theme.palette.text.primary,
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

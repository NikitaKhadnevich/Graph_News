/* eslint-disable sonarjs/no-duplicate-string */
import { styled } from '@mui/styles';
import { Grid, Box, Typography, Button } from '@mui/material';

import theme from 'themeSettings';

const SignMain = styled(Box)({
  height: '100% !important',
  minHeight: '100vh',
  width: '100% !important',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  padding: '0',
  background: theme.palette.primary.light,
});

const SignWrapper = styled(Box)({
  alignSelf: 'start',
  justifySelf: 'center',
  width: '328px',
  minHeight: '280px',
  maxHeight: '355px',
  boxShadow: '2px 4px 10px 2px rgba(0, 0, 0, 0.15)',
  marginTop: '10%',
});

const FormBox = styled(Box)({
  marginTop: '51px',
  width: '282px',
  marginRight: '22px',
  marginLeft: '22px',
  '@media(max-width: 1280px)': {
    margin: '0 auto',
    marginTop: '0px !important',
    width: '245px',
    maxHeight: '257px',
  },
});

const ItemsBox = styled(Box)({
  margin: '0px !important',
  padding: '0px !important',
  width: '100%',
});

const GridWrapper = styled(Grid)({
  width: '100% !important',
  margin: '0px !important ',
  padding: '0px !important',
  maxHeight: 'fit-content !important',
  marginBottom: '25px !important',
  alignContent: 'start',
  '& div:nth-child(2)': {
    marginBottom: '0px !important',
  },
  [theme.breakpoints.down('xl')]: {
    marginBottom: '0px !important',
    marginTop: '28px !important',
  },
});

interface IColor {
  color?: string;
}

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
    color: 'rgb(100 100 100) !important',
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

const GridError = styled(Grid)({
  maxHeight: '18px',
  width: '100%',
  marginTop: '16px',
  marginBottom: '24px',
});

const GridButton = styled(Grid)({
  display: 'flex',
  height: '43px',
  justifyContent: 'center',
  boxSizing: 'border-box',
  margin: '0 !important ',
  padding: '0px !important',
  [theme.breakpoints.down('xs')]: {
    width: '100%',
  },
});

const SignButton = styled(Button)({
  fontSize: '18px !important',
  fontWeight: '400 !important',
  letterSpacing: '0.2px !important',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px !important',
    fontWeight: '400 !important',
    letterSpacing: '0.2px !important',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '16px !important',
    fontWeight: '400 !important',
    letterSpacing: '0.2px !important',
  },
  '&:hover': {
    color: `${theme.palette.primary.main} !important`,
  },
});

const WarningHelper = styled(Typography)({
  fontSize: '14px !important',
  margin: '0px',
  lineHeight: '16px !important',
  textAlign: 'center',
  fontWeight: '400 !important',
  fontFamily: '"Ubuntu", sans-serif',
  color: theme.palette.primary.main,
});

export {
  SignMain,
  SignWrapper,
  FormBox,
  GridWrapper,
  GridSignInput,
  ItemsBox,
  GridButton,
  SignButton,
  WarningHelper,
  GridError,
};

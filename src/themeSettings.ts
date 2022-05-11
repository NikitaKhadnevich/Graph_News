import { createTheme } from '@mui/material';

const COLORS = {
  primaryColor: '#d43e41',
  secondaryColor: '#ffffff',
  lightColor: '#ffd7cd',
  darkColor: '#ffefe5',
  disabledTextColor: '#9b9b9b',
  primaryTextColor: '#000000',
  secondaryTextColor: '#ffffff',
};

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primaryColor,
      dark: COLORS.darkColor,
      light: COLORS.lightColor,
    },
    secondary: {
      main: COLORS.secondaryColor,
    },
    text: {
      primary: COLORS.primaryTextColor,
      secondary: COLORS.secondaryTextColor,
      disabled: COLORS.disabledTextColor,
    },
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});

export default theme;

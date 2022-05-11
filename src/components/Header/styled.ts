import styled from 'styled-components';
import { Box } from '@mui/system';
import Button from 'components/Button/Button';
import theme from '../../themeSettings';

const HeaderBox = styled(Box)({
  display: 'flex',
  height: '30px',
  paddingTop: '20px',
  justifyContent: 'center',
});

export const LogOutButton = styled(Button)({
  '&:hover': {
    color: `${theme.palette.primary.main} !important`,
  },
});

export default HeaderBox;

import styled from 'styled-components';
import { Box } from '@mui/system';

import { LOADER } from 'constants/loaderTypes';

interface LoaderType {
  type?: string;
}

const LoaderBox = styled(Box)<LoaderType>(({ type }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  ...(type === LOADER.page && {
    height: '100vh',
    width: '100vw',
  }),
}));

export default LoaderBox;

/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router';
import { PATHS } from 'constants/routes';
import { logOutHandler } from '../../utils/helpers/logOutHandler';
import HeaderBox, { LogOutButton } from './styled';

export default function Header(): JSX.Element {
  const logOutNavigate = useNavigate();
  const FAKE_PING = 0;

  const clickToLogOut = (): void => {
    logOutHandler();
    setTimeout(() => {
      logOutNavigate(PATHS.signIn);
    }, FAKE_PING);
  };

  return (
    <>
      <HeaderBox>
        <LogOutButton variant="contained" onClick={clickToLogOut}>
          Log Out
        </LogOutButton>
      </HeaderBox>
    </>
  );
}

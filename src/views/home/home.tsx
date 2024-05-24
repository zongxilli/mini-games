import { shallowEqual } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { actions as themeActions } from '../../reducers/theme';
import { Button } from '../../shared';

import {
  Buttons,
  Container,
  PageTitleContainer,
  SwitchThemeContainer,
} from './home.styles';

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const { mode } = useAppSelector(
    (state) => ({
      mode: state.theme.mode,
    }),
    shallowEqual,
  );

  const renderSwitchThemeIcon = () => {
    const Icon = mode === 'dark' ? theme.icons.moon : theme.icons.sun;

    return (
      <SwitchThemeContainer
        onClick={() =>
          dispatch(
            themeActions.changeThemeModeRequest(
              mode === 'dark' ? 'light' : 'dark',
            ),
          )
        }
      >
        <Icon size='1.5rem' color={theme.colors.textPrimary} />
      </SwitchThemeContainer>
    );
  };

  const renderPageTitle = () => {
    return <PageTitleContainer>Kenny&apos;s mini games</PageTitleContainer>;
  };

  const games = [
    {
      link: '/tictactoe',
      label: 'Tic Tac Toe',
    },
    {
      link: '/game2048',
      label: '2048',
    },
  ] as const;

  const renderGameButtons = () => (
    <Buttons>
      {games.map((game) => (
        <Button key={game.label} onClick={() => navigate(game.link)}>
          {game.label}
        </Button>
      ))}
    </Buttons>
  );

  return (
    <Container>
      {renderPageTitle()}
      {renderSwitchThemeIcon()}
      {renderGameButtons()}
    </Container>
  );
};

export default Home;

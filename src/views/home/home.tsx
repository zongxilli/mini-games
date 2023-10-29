import { useAppDispatch, useAppSelector } from '../../hooks';
import { actions as themeActions } from '../../reducers/theme';

import { Container } from './home.styles';

const Home = () => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state) => ({
    mode: state.theme.mode,
  }));

  return (
    <Container
      onClick={() =>
        dispatch(
          themeActions.changeThemeModeRequest(
            mode === 'dark' ? 'light' : 'dark',
          ),
        )
      }
    >
      Welcome to Zongxi Kenny &apos;s frontend skeleton
    </Container>
  );
};

export default Home;

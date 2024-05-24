import { AnimatePresence } from 'framer-motion';
import { shallowEqual } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { useAppSelector } from './hooks';
import { getTheme, GlobalStyles } from './theme';
import Game2048 from './views/game2048/game2048';
import Home from './views/home/home';
import TicTacToe from './views/ticTacToe/ticTacToe';

const App = () => {
  const { mode } = useAppSelector(
    (state) => ({
      mode: state.theme.mode,
    }),
    shallowEqual,
  );

  const renderGlobalComponents = () => (
    <>
      <GlobalStyles />
      <ToastContainer position='bottom-left' theme='light' />
    </>
  );

  const renderCustomGlobalComponents = () => <>{/* <Music /> */}</>;

  const renderRoutes = () => (
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/tictactoe' element={<TicTacToe />} />
      <Route path='/game2048' element={<Game2048 />} />
    </Routes>
  );

  return (
    <>
      {renderGlobalComponents()}
      <ThemeProvider theme={() => getTheme(mode)}>
        {renderCustomGlobalComponents()}
        <AnimatePresence>{renderRoutes()}</AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;

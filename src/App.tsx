import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { useAppSelector } from './hooks';
import { getTheme, GlobalStyles } from './theme';
import Home from './views/home/home';

const App = () => {
  const { mode } = useAppSelector((state) => ({
    mode: state.theme.mode,
  }));

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

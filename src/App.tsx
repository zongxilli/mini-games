import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { useAppSelector } from './hooks';
import { getTheme, GlobalStyles } from './theme';
import Career from './views/career/career';
import Home from './views/home/home';

const App = () => {
  const { mode } = useAppSelector((state) => ({
    mode: state.theme.mode,
  }));

  const renderGlobalComponents = () => (
    <>
      <GlobalStyles />
      <ToastContainer position='bottom-left' theme='light' />
      {/* <ReactTooltip effect='float' /> */}
    </>
  );

  const renderCustomGlobalComponents = () => <>{/* <Music /> */}</>;

  const renderRoutes = () => (
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='career/*' element={<Career />} />
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

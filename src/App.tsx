import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { getTheme, GlobalStyles } from './theme';
import Career from './views/career/career';
import Home from './views/home/home';

const App = () => {
  const renderGlobalComponents = () => (
    <>{/* <ReactTooltip effect='float' /> */}</>
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
      <ThemeProvider theme={getTheme('light')}>
        <GlobalStyles />
        {renderCustomGlobalComponents()}
        <AnimatePresence>{renderRoutes()}</AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;

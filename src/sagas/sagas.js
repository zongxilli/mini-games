import createSagaMiddleware from 'redux-saga';

import themeSaga from './theme';

const sagaMiddleware = createSagaMiddleware();

const runSagas = () => {
  sagaMiddleware.run(themeSaga);
};

export { sagaMiddleware, runSagas };

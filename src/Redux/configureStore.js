import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import postReducer from './config/title';
import { watcherSaga } from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const preloadedState = {};
const store = configureStore({
  middleware: [sagaMiddleware],
  reducer: { posts: postReducer },
  preloadedState,
});
sagaMiddleware.run(watcherSaga);

export default store;

import { createStore, compose, applyMiddleware, Reducer } from 'redux';
import { SagaMiddleware } from 'redux-saga';

export default (
  reducers: Reducer<any, any>,
  middlewares: SagaMiddleware<object>[]
) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};

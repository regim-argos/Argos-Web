import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { Reducer } from 'redux';

export default (reducers: Reducer<any, any>) => {
  const persistedReducer = persistReducer(
    {
      key: 'argos',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};

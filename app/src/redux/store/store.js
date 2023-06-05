// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import cartReducer from './cartSlice';

// import convertedReducer from '../reducer/convertedPdfReducer/convertedPdfReducer';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   blacklist: ['ConvertedPdf'], // Add any other reducers that should not be persisted
// };

// const persistedReducer = persistReducer(persistConfig, convertedReducer);

// export const store = configureStore({
//   reducer: {
//     cpf: persistedReducer,
//     // Add other reducers here
//   },
// });

// export const persistor = persistStore(store);

import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'; // imports from redux-persist
import AsyncStorage from '@react-native-async-storage/async-storage';
// Reducer
import convertedPdfReducer from '../reducer/convertedPdfReducer/convertedPdfReducer';

const rootReducer = combineReducers({
  convertedPdfR: convertedPdfReducer,
  // imgR: ImagesReducer,
});

// Middleware: Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['convertedPdfR'],
  blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export { store, persistor };

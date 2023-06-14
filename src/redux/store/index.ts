import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { useDispatch } from 'react-redux';
import reducers from '../reducers'

let middleWaresToApply = [];

const persistConfig = {
    key: 'root',
    whitelist: ['auth'],
    storage: AsyncStorage,
};

// Redux Persist is a tool used to seamlessly save the application's 
// Redux state object to AsyncStorage . On app launch, Redux Persist 
// retrieves this persisted state and saves it back to Redux. Normally, 
// Redux sets the initial state of your app upon launch.
const persistedReducer = persistReducer(persistConfig, reducers);

if (__DEV__) {
    const createFlipperDebugger = require('redux-flipper').default;
    middleWaresToApply.push(createFlipperDebugger())
}

const store = configureStore({
    reducer: persistedReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store;
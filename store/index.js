import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import categorySlice from './slices/categorySlice';
import detailSlice from './slices/detailSlice';
import favoriteSlice from './slices/favoriteSlice';
import filterSlice from './slices/filterSlice';
import homeSlice from './slices/homeSlice';
import listSlice from './slices/listSlice';
import searchSlice from './slices/searchSlice';
import userSlice from './slices/userSlice';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartSlice from './slices/cartSlice';
import orderSlice from './slices/orderSlice';
const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
        Cart        : cartSlice,
        Detail      : detailSlice,
        Favorite    : favoriteSlice,
        Filter      : filterSlice,
        Home        : homeSlice,
        List        : listSlice,
        Search      : searchSlice,
        User        : userSlice,
        Category    : categorySlice,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: {
        Cart        : cartSlice,
        Detail      : detailSlice,
        Favorite    : favoriteSlice,
        Filter      : filterSlice,
        Home        : homeSlice,
        List        : listSlice,
        Search      : searchSlice,
        User        : userSlice,
        Category    : categorySlice,
        Order       : orderSlice
},
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducers/citySlice';
import uiReducer from './reducers/uiSlice';

const store = configureStore({
  reducer: {
    city: cityReducer,
    ui: uiReducer,
  },
});

export default store;

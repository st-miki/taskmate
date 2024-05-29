import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    user: userReducer,
    // other reducers can be added here
  },
});

export default store;

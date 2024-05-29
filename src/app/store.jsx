// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../features/sidebar/sidebarSlice';

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

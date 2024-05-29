// src/features/sidebar/sidebarSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    selectedItem: 'Overview',
  },
  reducers: {
    setSidebarItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setSidebarItem } = sidebarSlice.actions;

export const selectSelectedItem = (state) => state.sidebar.selectedItem;

export default sidebarSlice.reducer;

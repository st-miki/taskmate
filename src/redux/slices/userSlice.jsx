import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      console.log('Action payload:', action.payload); // Log the payload
      state.username = action.payload;
      console.log('Updated state:', state.username); // Log the updated state
    },
  },
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;

import type { PayloadAction } from '@reduxjs/toolkit';
import type { FetchError } from '~/utils/types';
import { createSlice } from '@reduxjs/toolkit';

interface User {
  id: string;
  username: string;
  avatarURL: string;
  role: 'user' | 'admin';
  accessToken: string;
}

interface UserSlice {
  currentUser: User | null;
  isFetching: boolean;
  error: FetchError | null;
}

const initialState: UserSlice = {
  currentUser: null,
  isFetching: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startUpdate(state) {
      state.isFetching = true;
    },
    updateSuccess(state, action: PayloadAction<User>) {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    updateFail(state, action: PayloadAction<Partial<FetchError>>) {
      state.isFetching = false;
      state.currentUser = null;
      state.error = {
        status: action.payload.status ?? 500,
        error: action.payload.error ?? 'Connect server failed',
      };
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { startUpdate, updateSuccess, updateFail, clearError } = userSlice.actions;
export default userSlice.reducer;

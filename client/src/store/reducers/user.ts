import type { PayloadAction } from '@reduxjs/toolkit';
import type { User } from '~/types/auth';
import type { FetchError } from '~/types/api';
import { createSlice } from '@reduxjs/toolkit';

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

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface User {
  id: string;
  username: string;
  avatarURL: string;
  role: 'user' | 'admin';
  accessToken: string;
}

interface FetchError {
  status: number;
  error: string;
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
    startFetching(state) {
      state.isFetching = true;
    },
    fetchingSuccess(state, action: PayloadAction<User>) {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = null;
    },
    fetchingFail(state, action: PayloadAction<FetchError>) {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;

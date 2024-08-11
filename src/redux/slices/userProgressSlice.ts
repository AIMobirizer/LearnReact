
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const fetchUserProgresses = createAsyncThunk('userProgress/fetchUserProgresses', async () => {
  const response = await axios.get('/user_progress');
  return response.data;
});

export const createUserProgress = createAsyncThunk('userProgress/createUserProgress', async (progress) => {
  const response = await axios.post('/user_progress', progress);
  return response.data;
});

const userProgressSlice = createSlice({
  name: 'userProgress',
  initialState: {
    progresses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProgresses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProgresses.fulfilled, (state, action) => {
        state.loading = false;
        state.progresses = action.payload;
      })
      .addCase(fetchUserProgresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createUserProgress.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUserProgress.fulfilled, (state, action) => {
        state.loading = false;
        state.progresses.push(action.payload);
      })
      .addCase(createUserProgress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userProgressSlice.reducer;

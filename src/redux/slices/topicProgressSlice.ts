
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const fetchTopicProgresses = createAsyncThunk('topicProgress/fetchTopicProgresses', async () => {
  const response = await axios.get('/topic_progress');
  return response.data;
});

export const createTopicProgress = createAsyncThunk('topicProgress/createTopicProgress', async (progress) => {
  const response = await axios.post('/topic_progress', progress);
  return response.data;
});

const topicProgressSlice = createSlice({
  name: 'topicProgress',
  initialState: {
    progresses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopicProgresses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTopicProgresses.fulfilled, (state, action) => {
        state.loading = false;
        state.progresses = action.payload;
      })
      .addCase(fetchTopicProgresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTopicProgress.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTopicProgress.fulfilled, (state, action) => {
        state.loading = false;
        state.progresses.push(action.payload);
      })
      .addCase(createTopicProgress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default topicProgressSlice.reducer;

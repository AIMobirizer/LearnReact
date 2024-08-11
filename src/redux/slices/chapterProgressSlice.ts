
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const fetchChapterProgresses = createAsyncThunk('chapterProgress/fetchChapterProgresses', async () => {
  const response = await axios.get('/chapter_progress');
  return response.data;
});

export const createChapterProgress = createAsyncThunk('chapterProgress/createChapterProgress', async (progress) => {
  const response = await axios.post('/chapter_progress', progress);
  return response.data;
});

const chapterProgressSlice = createSlice({
  name: 'chapterProgress',
  initialState: {
    progresses: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChapterProgresses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChapterProgresses.fulfilled, (state, action) => {
        state.loading = false;
        state.progresses = action.payload;
      })
      .addCase(fetchChapterProgresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createChapterProgress.pending, (state) => {
        state.loading = true;
      })
      .addCase(createChapterProgress.fulfilled, (state, action) => {
        state.loading = false;
        state.progresses.push(action.payload);
      })
      .addCase(createChapterProgress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default chapterProgressSlice.reducer;

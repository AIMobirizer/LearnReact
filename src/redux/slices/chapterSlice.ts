
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const fetchChapters = createAsyncThunk('chapters/fetchChapters', async () => {
  const response = await axios.get('/chapters');
  return response.data;
});

export const createChapter = createAsyncThunk('chapters/createChapter', async (chapter) => {
  const response = await axios.post('/chapters', chapter);
  return response.data;
});

const chapterSlice = createSlice({
  name: 'chapter',
  initialState: {
    chapters: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChapters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChapters.fulfilled, (state, action) => {
        state.loading = false;
        state.chapters = action.payload;
      })
      .addCase(fetchChapters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createChapter.pending, (state) => {
        state.loading = true;
      })
      .addCase(createChapter.fulfilled, (state, action) => {
        state.loading = false;
        state.chapters.push(action.payload);
      })
      .addCase(createChapter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default chapterSlice.reducer;

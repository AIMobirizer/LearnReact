
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const fetchChapterContents = createAsyncThunk('chapterContents/fetchChapterContents', async () => {
  const response = await axios.get('/chapter_contents');
  return response.data;
});

export const createChapterContent = createAsyncThunk('chapterContents/createChapterContent', async (content) => {
  const response = await axios.post('/chapter_contents', content);
  return response.data;
});

const chapterContentSlice = createSlice({
  name: 'chapterContent',
  initialState: {
    contents: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChapterContents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChapterContents.fulfilled, (state, action) => {
        state.loading = false;
        state.contents = action.payload;
      })
      .addCase(fetchChapterContents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createChapterContent.pending, (state) => {
        state.loading = true;
      })
      .addCase(createChapterContent.fulfilled, (state, action) => {
        state.loading = false;
        state.contents.push(action.payload);
      })
      .addCase(createChapterContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default chapterContentSlice.reducer;

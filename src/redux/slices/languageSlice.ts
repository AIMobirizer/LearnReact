
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const fetchLanguages = createAsyncThunk('languages/fetchLanguages', async () => {
  const response = await axios.get('/languages');
  return response.data;
});

export const createLanguage = createAsyncThunk('languages/createLanguage', async (language) => {
  const response = await axios.post('/languages', language);
  return response.data;
});

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    languages: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLanguages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLanguages.fulfilled, (state, action) => {
        state.loading = false;
        state.languages = action.payload;
      })
      .addCase(fetchLanguages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createLanguage.pending, (state) => {
        state.loading = true;
      })
      .addCase(createLanguage.fulfilled, (state, action) => {
        state.loading = false;
        state.languages.push(action.payload);
      })
      .addCase(createLanguage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default languageSlice.reducer;

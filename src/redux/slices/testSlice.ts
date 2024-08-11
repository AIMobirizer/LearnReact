
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const fetchTests = createAsyncThunk('tests/fetchTests', async () => {
  const response = await axios.get('/tests');
  return response.data;
});

export const createTest = createAsyncThunk('tests/createTest', async (test) => {
  const response = await axios.post('/tests', test);
  return response.data;
});

const testSlice = createSlice({
  name: 'test',
  initialState: {
    tests: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTests.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTests.fulfilled, (state, action) => {
        state.loading = false;
        state.tests = action.payload;
      })
      .addCase(fetchTests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTest.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTest.fulfilled, (state, action) => {
        state.loading = false;
        state.tests.push(action.payload);
      })
      .addCase(createTest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default testSlice.reducer;

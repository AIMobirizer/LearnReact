
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const fetchTestResults = createAsyncThunk('testResults/fetchTestResults', async () => {
  const response = await axios.get('/test_results');
  return response.data;
});

export const createTestResult = createAsyncThunk('testResults/createTestResult', async (result) => {
  const response = await axios.post('/test_results', result);
  return response.data;
});

const testResultSlice = createSlice({
  name: 'testResult',
  initialState: {
    results: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestResults.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTestResults.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchTestResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTestResult.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTestResult.fulfilled, (state, action) => {
        state.loading = false;
        state.results.push(action.payload);
      })
      .addCase(createTestResult.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default testResultSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const fetchStates = createAsyncThunk('states/fetchStates', async () => {
  const response = await axios.get('/states');
  return response.data;
});

export const createState = createAsyncThunk('states/createState', async (state) => {
  const response = await axios.post('/states', state);
  return response.data;
});

const stateSlice = createSlice({
  name: 'state',
  initialState: {
    states: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStates.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStates.fulfilled, (state, action) => {
        state.loading = false;
        state.states = action.payload;
      })
      .addCase(fetchStates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createState.pending, (state) => {
        state.loading = true;
      })
      .addCase(createState.fulfilled, (state, action) => {
        state.loading = false;
        state.states.push(action.payload);
      })
      .addCase(createState.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default stateSlice.reducer;

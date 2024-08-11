
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../services/api';

export const fetchCertificates = createAsyncThunk('certificates/fetchCertificates', async () => {
  const response = await axios.get('/certificates');
  return response.data;
});

export const createCertificate = createAsyncThunk('certificates/createCertificate', async (certificate) => {
  const response = await axios.post('/certificates', certificate);
  return response.data;
});

const certificateSlice = createSlice({
  name: 'certificate',
  initialState: {
    certificates: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCertificates.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCertificates.fulfilled, (state, action) => {
        state.loading = false;
        state.certificates = action.payload;
      })
      .addCase(fetchCertificates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createCertificate.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCertificate.fulfilled, (state, action) => {
        state.loading = false;
        state.certificates.push(action.payload);
      })
      .addCase(createCertificate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default certificateSlice.reducer;

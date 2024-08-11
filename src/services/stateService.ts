
import api from './api';

export const getStates = async () => {
  const response = await api.get('/states');
  return response.data;
};

export const createState = async (state) => {
  const response = await api.post('/states', state);
  return response.data;
};

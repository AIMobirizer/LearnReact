
import api from './api';

export const getTests = async () => {
  const response = await api.get('/tests');
  return response.data;
};

export const createTest = async (test) => {
  const response = await api.post('/tests', test);
  return response.data;
};

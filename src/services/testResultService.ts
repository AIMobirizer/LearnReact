
import api from './api';

export const getTestResults = async () => {
  const response = await api.get('/test_results');
  return response.data;
};

export const createTestResult = async (result) => {
  const response = await api.post('/test_results', result);
  return response.data;
};

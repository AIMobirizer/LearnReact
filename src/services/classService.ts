
import api from './api';

export const getClasses = async () => {
  const response = await api.get('/classes');
  return response.data;
};

export const createClass = async (cls) => {
  const response = await api.post('/classes', cls);
  return response.data;
};

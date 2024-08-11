
import api from './api';

export const getLanguages = async () => {
  const response = await api.get('/languages');
  return response.data;
};

export const createLanguage = async (language) => {
  const response = await api.post('/languages', language);
  return response.data;
};

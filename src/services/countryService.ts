
import api from './api';

export const getCountries = async () => {
  const response = await api.get('/countries');
  return response.data;
};

export const createCountry = async (country) => {
  const response = await api.post('/countries', country);
  return response.data;
};

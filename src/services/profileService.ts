
import api from './api';

export const getProfiles = async () => {
  const response = await api.get('/profiles');
  return response.data;
};

export const createProfile = async (profile) => {
  const response = await api.post('/profiles', profile);
  return response.data;
};

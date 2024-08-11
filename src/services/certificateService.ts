
import api from './api';

export const getCertificates = async () => {
  const response = await api.get('/certificates');
  return response.data;
};

export const createCertificate = async (certificate) => {
  const response = await api.post('/certificates', certificate);
  return response.data;
};

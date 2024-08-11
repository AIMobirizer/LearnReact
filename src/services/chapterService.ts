
import api from './api';

export const getChapters = async () => {
  const response = await api.get('/chapters');
  return response.data;
};

export const createChapter = async (chapter) => {
  const response = await api.post('/chapters', chapter);
  return response.data;
};

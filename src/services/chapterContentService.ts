
import api from './api';

export const getChapterContents = async () => {
  const response = await api.get('/chapter_contents');
  return response.data;
};

export const createChapterContent = async (content) => {
  const response = await api.post('/chapter_contents', content);
  return response.data;
};

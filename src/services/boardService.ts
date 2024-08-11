
import api from './api';

export const getBoards = async () => {
  const response = await api.get('/boards');
  return response.data;
};

export const createBoard = async (board) => {
  const response = await api.post('/boards', board);
  return response.data;
};

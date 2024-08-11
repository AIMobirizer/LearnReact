
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBoards } from '../../redux/slices/boardSlice';
import Link from 'next/link';
import Layout from '../../components/Layout';

const BoardsPage = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state: any) => state.board.boards);
  const loading = useSelector((state: any) => state.board.loading);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Boards</h1>
      <Link href="/boards/create">
        <a className="text-blue-500">Create New Board</a>
      </Link>
      <ul>
        {boards.map((board: any) => (
          <li key={board.id}>
            {board.name} - {board.description} - <Link href={`/boards/${board.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BoardsPage;

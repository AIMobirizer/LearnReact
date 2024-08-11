
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBoard } from '../../redux/slices/boardSlice';
import { useRouter } from 'next/router';
import BoardForm from '../../components/forms/BoardForm';
import Layout from '../../components/Layout';

const CreateBoardPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [board, setBoard] = useState({ name: '', description: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBoard({ ...board, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createBoard(board))
      .unwrap()
      .then(() => {
        router.push('/boards');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create Board</h1>
      <BoardForm board={board} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </Layout>
  );
};

export default CreateBoardPage;

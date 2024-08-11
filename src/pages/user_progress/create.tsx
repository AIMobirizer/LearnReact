
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUserProgress } from '../../redux/slices/userProgressSlice';
import { useRouter } from 'next/router';
import UserProgressForm from '../../components/forms/UserProgressForm';

const CreateUserProgressPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [progress, setProgress] = useState({ user_id: '', chapter_id: '', progress: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProgress({ ...progress, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createUserProgress(progress))
      .unwrap()
      .then(() => {
        router.push('/user_progress');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create User Progress</h1>
      <UserProgressForm progress={progress} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </div>
  );
};

export default CreateUserProgressPage;

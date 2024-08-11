
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTest } from '../../redux/slices/testSlice';
import { fetchChapters } from '../../redux/slices/chapterSlice';
import { useRouter } from 'next/router';
import TestForm from '../../components/forms/TestForm';
import Layout from '../../components/Layout';

const CreateTestPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [test, setTest] = useState({ name: '', chapter_id: '' });
  const [errors, setErrors] = useState({});

  const chapters = useSelector((state: any) => state.chapter.chapters);

  useEffect(() => {
    dispatch(fetchChapters());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTest({ ...test, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createTest(test))
      .unwrap()
      .then(() => {
        router.push('/tests');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create Test</h1>
      <TestForm test={test} chapters={chapters} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </Layout>
  );
};

export default CreateTestPage;

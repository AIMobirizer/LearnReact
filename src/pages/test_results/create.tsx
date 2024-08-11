
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTestResult } from '../../redux/slices/testResultSlice';
import { useRouter } from 'next/router';
import TestResultForm from '../../components/forms/TestResultForm';
import Layout from '../../components/Layout';

const CreateTestResultPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [result, setResult] = useState({ score: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResult({ ...result, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createTestResult(result))
      .unwrap()
      .then(() => {
        router.push('/test_results');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create Test Result</h1>
      <TestResultForm result={result} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </Layout>
  );
};

export default CreateTestResultPage;

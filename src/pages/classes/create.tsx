
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createClass } from '../../redux/slices/classSlice';
import { useRouter } from 'next/router';
import ClassForm from '../../components/forms/ClassForm';
import Layout from '../../components/Layout';

const CreateClassPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [cls, setCls] = useState({ name: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCls({ ...cls, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createClass(cls))
      .unwrap()
      .then(() => {
        router.push('/classes');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create Class</h1>
      <ClassForm cls={cls} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </Layout>
  );
};

export default CreateClassPage;

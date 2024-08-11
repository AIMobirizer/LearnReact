
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSubject } from '../../redux/slices/subjectSlice';
import { useRouter } from 'next/router';
import SubjectForm from '../../components/forms/SubjectForm';
import Layout from '../../components/Layout';

const CreateSubjectPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [subject, setSubject] = useState({ name: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubject({ ...subject, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createSubject(subject))
      .unwrap()
      .then(() => {
        router.push('/subjects');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create Subject</h1>
      <SubjectForm subject={subject} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </Layout>
  );
};

export default CreateSubjectPage;

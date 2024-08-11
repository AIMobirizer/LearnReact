
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createState } from '../../redux/slices/stateSlice';
import { useRouter } from 'next/router';
import StateForm from '../../components/forms/StateForm';
import Layout from '../../components/Layout';

const CreateStatePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [state, setState] = useState({ name: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createState(state))
      .unwrap()
      .then(() => {
        router.push('/states');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create State</h1>
      <StateForm state={state} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </Layout>
  );
};

export default CreateStatePage;

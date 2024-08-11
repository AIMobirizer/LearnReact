
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/slices/userSlice';
import { useRouter } from 'next/router';
import UserForm from '../../components/forms/UserForm';
import Layout from '../../components/Layout';

const CreateUserPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createUser(user))
      .unwrap()
      .then(() => {
        router.push('/users');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create User</h1>
      <UserForm user={user} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </Layout>
  );
};

export default CreateUserPage;

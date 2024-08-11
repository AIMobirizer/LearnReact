
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProfile } from '../../redux/slices/profileSlice';
import { useRouter } from 'next/router';
import ProfileForm from '../../components/forms/ProfileForm';
import Layout from '../../components/Layout';

const CreateProfilePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [profile, setProfile] = useState({ student_name: '', school_name: '', age: '', board_id: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createProfile(profile))
      .unwrap()
      .then(() => {
        router.push('/profiles');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create Profile</h1>
      <ProfileForm profile={profile} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </Layout>
  );
};

export default CreateProfilePage;

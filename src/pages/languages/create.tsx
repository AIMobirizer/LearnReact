
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createLanguage } from '../../redux/slices/languageSlice';
import { useRouter } from 'next/router';
import LanguageForm from '../../components/forms/LanguageForm';
import Layout from '../../components/Layout';

const CreateLanguagePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [language, setLanguage] = useState({ name: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLanguage({ ...language, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createLanguage(language))
      .unwrap()
      .then(() => {
        router.push('/languages');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create Language</h1>
      <LanguageForm language={language} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </Layout>
  );
};

export default CreateLanguagePage;

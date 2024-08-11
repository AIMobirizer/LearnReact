
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCertificate } from '../../redux/slices/certificateSlice';
import { useRouter } from 'next/router';
import CertificateForm from '../../components/forms/CertificateForm';
import Layout from '../../components/Layout';

const CreateCertificatePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [certificate, setCertificate] = useState({ name: '', description: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCertificate({ ...certificate, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createCertificate(certificate))
      .unwrap()
      .then(() => {
        router.push('/certificates');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create Certificate</h1>
      <CertificateForm certificate={certificate} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </Layout>
  );
};

export default CreateCertificatePage;

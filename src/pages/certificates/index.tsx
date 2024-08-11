
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCertificates } from '../../redux/slices/certificateSlice';
import Link from 'next/link';
import Layout from '../../components/Layout';

const CertificatesPage = () => {
  const dispatch = useDispatch();
  const certificates = useSelector((state: any) => state.certificate.certificates);
  const loading = useSelector((state: any) => state.certificate.loading);

  useEffect(() => {
    dispatch(fetchCertificates());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Certificates</h1>
      <Link href="/certificates/create">
        <a className="text-blue-500">Create New Certificate</a>
      </Link>
      <ul>
        {certificates.map((certificate: any) => (
          <li key={certificate.id}>
            {certificate.name} - {certificate.description} - <Link href={`/certificates/${certificate.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default CertificatesPage;


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubjects } from '../../redux/slices/subjectSlice';
import Link from 'next/link';
import Layout from '../../components/Layout';

const SubjectsPage = () => {
  const dispatch = useDispatch();
  const subjects = useSelector((state: any) => state.subject.subjects);
  const loading = useSelector((state: any) => state.subject.loading);

  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Subjects</h1>
      <Link href="/subjects/create">
        <a className="text-blue-500">Create New Subject</a>
      </Link>
      <ul>
        {subjects.map((subject: any) => (
          <li key={subject.id}>
            {subject.name} - <Link href={`/subjects/${subject.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default SubjectsPage;

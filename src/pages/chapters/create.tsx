
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createChapter } from '../../redux/slices/chapterSlice';
import { fetchSubjects } from '../../redux/slices/subjectSlice';
import { useRouter } from 'next/router';
import ChapterForm from '../../components/forms/ChapterForm';
import Layout from '../../components/Layout';

const CreateChapterPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [chapter, setChapter] = useState({ name: '', subject_id: '' });
  const [errors, setErrors] = useState({});

  const subjects = useSelector((state: any) => state.subject.subjects);

  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setChapter({ ...chapter, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createChapter(chapter))
      .unwrap()
      .then(() => {
        router.push('/chapters');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create Chapter</h1>
      <ChapterForm chapter={chapter} subjects={subjects} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </Layout>
  );
};

export default CreateChapterPage;

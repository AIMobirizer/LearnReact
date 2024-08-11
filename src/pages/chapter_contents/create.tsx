
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createChapterContent } from '../../redux/slices/chapterContentSlice';
import { useRouter } from 'next/router';
import ChapterContentForm from '../../components/forms/ChapterContentForm';
import Layout from '../../components/Layout';

const CreateChapterContentPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [content, setContent] = useState({ title: '', content: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createChapterContent(content))
      .unwrap()
      .then(() => {
        router.push('/chapter_contents');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create Chapter Content</h1>
      <ChapterContentForm content={content} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </Layout>
  );
};

export default CreateChapterContentPage;

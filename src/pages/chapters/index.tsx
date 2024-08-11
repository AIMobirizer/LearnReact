
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChapters } from '../../redux/slices/chapterSlice';
import Link from 'next/link';
import Layout from '../../components/Layout';

const ChaptersPage = () => {
  const dispatch = useDispatch();
  const chapters = useSelector((state: any) => state.chapter.chapters);
  const loading = useSelector((state: any) => state.chapter.loading);

  useEffect(() => {
    dispatch(fetchChapters());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Chapters</h1>
      <Link href="/chapters/create">
        <a className="text-blue-500">Create New Chapter</a>
      </Link>
      <ul>
        {chapters.map((chapter: any) => (
          <li key={chapter.id}>
            {chapter.name} - <Link href={`/chapters/${chapter.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default ChaptersPage;

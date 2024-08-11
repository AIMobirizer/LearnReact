
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChapterContents } from '../../redux/slices/chapterContentSlice';
import Link from 'next/link';
import Layout from '../../components/Layout';

const ChapterContentsPage = () => {
  const dispatch = useDispatch();
  const contents = useSelector((state: any) => state.chapterContent.contents);
  const loading = useSelector((state: any) => state.chapterContent.loading);

  useEffect(() => {
    dispatch(fetchChapterContents());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Chapter Contents</h1>
      <Link href="/chapter_contents/create">
        <a className="text-blue-500">Create New Content</a>
      </Link>
      <ul>
        {contents.map((content: any) => (
          <li key={content.id}>
            {content.title} - <Link href={`/chapter_contents/${content.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default ChapterContentsPage;

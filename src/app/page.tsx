import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Welcome to the Admin Panel</h1>
      <p className="mb-4">Manage your application with the tools provided below:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Users Section */}
        <Link href="/users" passHref>
          <div className="block p-6 bg-white border rounded-lg shadow hover:bg-gray-50 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Users</h2>
            <p>View and manage all users in the system.</p>
          </div>
        </Link>

        {/* Profiles Section */}
        <Link href="/profiles" passHref>
          <div className="block p-6 bg-white border rounded-lg shadow hover:bg-gray-50 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Profiles</h2>
            <p>Manage profiles linked to users including student information.</p>
          </div>
        </Link>

        {/* Boards Section */}
        <Link href="/boards" passHref>
          <div className="block p-6 bg-white border rounded-lg shadow hover:bg-gray-50 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Boards</h2>
            <p>Oversee the boards and their configurations.</p>
          </div>
        </Link>

        {/* Classes Section */}
        <Link href="/classes" passHref>
          <div className="block p-6 bg-white border rounded-lg shadow hover:bg-gray-50 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Classes</h2>
            <p>Manage the classes associated with different boards.</p>
          </div>
        </Link>

        {/* Subjects Section */}
        <Link href="/subjects" passHref>
          <div className="block p-6 bg-white border rounded-lg shadow hover:bg-gray-50 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Subjects</h2>
            <p>Handle subject data and their associations with classes.</p>
          </div>
        </Link>

        {/* Chapters Section */}
        <Link href="/chapters" passHref>
          <div className="block p-6 bg-white border rounded-lg shadow hover:bg-gray-50 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Chapters</h2>
            <p>Manage chapters within subjects for structured content.</p>
          </div>
        </Link>

        {/* Tests Section */}
        <Link href="/tests" passHref>
          <div className="block p-6 bg-white border rounded-lg shadow hover:bg-gray-50 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Tests</h2>
            <p>Oversee test creation and management for students.</p>
          </div>
        </Link>

        {/* Test Results Section */}
        <Link href="/test_results" passHref>
          <div className="block p-6 bg-white border rounded-lg shadow hover:bg-gray-50 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Test Results</h2>
            <p>View and manage test results and student performance.</p>
          </div>
        </Link>

        {/* Certificates Section */}
        <Link href="/certificates" passHref>
          <div className="block p-6 bg-white border rounded-lg shadow hover:bg-gray-50 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Certificates</h2>
            <p>Issue and manage certificates awarded to students.</p>
          </div>
        </Link>
      </div>
    </Layout>
  );
}

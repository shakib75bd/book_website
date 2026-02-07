'use client';

import Link from 'next/link';
import { Author } from '@/data/authors';
import AuthorImage from './AuthorImage';

const AuthorSection = ({
  title,
  groupedAuthors,
}: {
  title: string;
  groupedAuthors: Record<string, Author[]>;
}) => (
  <div className="mb-12">
    <h1 className="text-3xl font-bold mb-8 text-gray-800">{title}</h1>
    {Object.entries(groupedAuthors).map(([letter, authorGroup]) => (
      <div key={letter} className="mb-10">
        <h2 className="text-4xl font-bold text-gray-400 mb-4">{letter}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {authorGroup.map((author) => (
            <Link
              href={`/author/${author.id}`}
              key={author.id}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <AuthorImage src={author.image} alt={author.name} />
              <h3 className="text-md font-semibold mt-4 text-gray-800">{author.name}</h3>
              <p className="text-gray-500 text-sm mt-1">
                মোট বই: {author.id === 'edgar-allan-poe' ? 2 : 1} টি
              </p>
            </Link>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default AuthorSection;

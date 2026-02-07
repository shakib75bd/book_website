'use client';

import Link from 'next/link';
import { Author } from '@/data/authors';
import { books } from '@/data/books';
import AuthorImage from './AuthorImage';

const AuthorSection = ({
  title,
  groupedAuthors,
}: {
  title: string;
  groupedAuthors: Record<string, Author[]>;
}) => {
  // Flatten all authors into a single array
  const allAuthors = Object.values(groupedAuthors).flat();

  return (
    <div className="mb-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">{title}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {allAuthors.map((author) => {
          const bookCount = books.filter((book) => book.authorId === author.id).length;
          return (
            <Link
              href={`/author/${author.id}`}
              key={author.id}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <AuthorImage src={author.image} alt={author.name} />
              <h3 className="text-md font-semibold mt-4 text-gray-800">{author.name}</h3>
              <p className="text-gray-500 text-sm mt-1">
                মোট বই: {bookCount} টি
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AuthorSection;

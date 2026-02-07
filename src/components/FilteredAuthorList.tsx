'use client';

import Link from 'next/link';
import { Author } from '@/data/authors';
import AuthorImage from './AuthorImage';

const FilteredAuthorList = ({ authors }: { authors: Author[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
      {authors.map((author) => (
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
  );
};

export default FilteredAuthorList;

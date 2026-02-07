import { authors } from '@/data/authors';
import { books } from '@/data/books';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthorPage({
  params,
}: {
  params: { authorId: string };
}) {
  const author = authors.find((a) => a.id === params.authorId);
  const authorBooks = books.filter((b) => b.authorId === params.authorId);

  if (!author) {
    return <div>Author not found</div>;
  }

  return (
    <div className="p-4">
      <div className="flex flex-col items-center text-center mb-8">
        <Image
          src={author.image}
          alt={author.name}
          width={150}
          height={150}
          className="rounded-full object-cover mb-4"
        />
        <h1 className="text-4xl font-bold">{author.name}</h1>
        <p className="text-gray-400 max-w-2xl mt-4">{author.bio}</p>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center">
        সংগ্রহ: {authorBooks.length} টি
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {authorBooks.map((book) => (
          <Link
            href={`/book/${book.id}`}
            key={book.id}
            className="border border-gray-700 rounded-lg p-4 flex flex-col items-center text-center hover:bg-gray-800"
          >
            <Image
              src={book.image}
              alt={book.title}
              width={150}
              height={220}
              className="object-cover"
            />
            <h3 className="text-lg font-semibold mt-4">{book.title}</h3>
            <p className="text-gray-400">{book.author}</p>
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md">
              অনুবাদ
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

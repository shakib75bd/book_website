import { books } from '@/data/books';
import Image from 'next/image';
import Link from 'next/link';

export default function BookPage({ params }: { params: { bookId: string } }) {
  const book = books.find((b) => b.id === params.bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <Image
            src={book.image}
            alt={book.title}
            width={200}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex-grow">
          <p className="text-yellow-500">অনুবাদ</p>
          <p className="text-gray-400">{book.publishedDate}</p>
          <h1 className="text-4xl font-bold mt-2">{book.title}</h1>
          <Link
            href={`/author/${book.authorId}`}
            className="text-blue-400 text-2xl"
          >
            {book.author}
          </Link>
          <p className="text-gray-400 mt-2">
            {book.id === 'edgar-allan-poe-rachanasamagra'
              ? '৮৩ পিডিএফ'
              : '৮৩ পিডিএফ'}{' '}
            | ৬ ডাউনলোড
          </p>
          <a
            href={book.downloadLink}
            className="mt-4 inline-block bg-yellow-500 text-black px-6 py-3 rounded-md font-bold"
          >
            বইটি ডাউনলোড করুন
          </a>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">ভূমিকা</h2>
            <p className="text-gray-400 mt-4">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { authors } from '@/data/authors';
import FilteredAuthorList from '@/components/FilteredAuthorList';

export default async function LetterPage({ params }: { params: Promise<{ char: string }> }) {
  const { char } = await params;
  const decodedChar = decodeURIComponent(char);

  const filteredAuthors = authors.filter((author) =>
    author.name.startsWith(decodedChar)
  );

  return (
    <div>
       <h1 className="text-2xl font-bold mb-6 text-gray-700">
        &apos;{decodedChar}&apos; দিয়ে লেখক...
      </h1>
      {filteredAuthors.length > 0 ? (
        <FilteredAuthorList authors={filteredAuthors} />
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold">No Authors Found</h2>
          <p className="text-gray-400">
            There are no authors whose names start with the letter &quot;{decodedChar}&quot;.
          </p>
        </div>
      )}
    </div>
  );
}

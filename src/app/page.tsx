import { authors } from '@/data/authors';
import AuthorSection from '@/components/AuthorSection';

export default function Home() {
  const groupAuthors = (authorList: typeof authors) => {
    const grouped = authorList.reduce((acc, author) => {
      const firstLetter = author.name[0];
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(author);
      return acc;
    }, {} as Record<string, typeof authors>);

    // Sort the groups by their keys (first letter)
    return Object.keys(grouped)
      .sort()
      .reduce((acc, key) => {
        acc[key] = grouped[key];
        return acc;
      }, {} as Record<string, typeof authors>);
  };

  const groupedAuthors = groupAuthors(authors);

  return (
    <div>
      <AuthorSection title="সব লেখক" groupedAuthors={groupedAuthors} />
    </div>
  );
}

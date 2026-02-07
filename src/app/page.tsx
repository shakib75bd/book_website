import { authors } from '@/data/authors';
import AuthorSection from '@/components/AuthorSection';

export default function Home() {
  const bengaliAuthors = authors.filter((author) => author.language === 'bn');
  const englishAuthors = authors.filter((author) => author.language === 'en');

  const groupAuthors = (authorList: typeof authors) => {
    return authorList.reduce((acc, author) => {
      const firstLetter = author.name[0];
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(author);
      return acc;
    }, {} as Record<string, typeof authors>);
  };

  const groupedBengaliAuthors = groupAuthors(bengaliAuthors);
  const groupedEnglishAuthors = groupAuthors(englishAuthors);

  return (
    <div>
      <AuthorSection title="বাংলা বই" groupedAuthors={groupedBengaliAuthors} />
      <AuthorSection title="ইংরেজি বই" groupedAuthors={groupedEnglishAuthors} />
    </div>
  );
}

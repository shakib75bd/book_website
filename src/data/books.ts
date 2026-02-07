export interface Book {
  id: string;
  title: string;
  authorId: string;
  author: string;
  image: string;
  description: string;
  downloadLink: string;
  publishedDate: string;
}

export const books: Book[] = [
  {
    id: 'the-narrative-of-arthur-gordon-pym-of-nantucket',
    title: 'দ্য ন্যারেটিভ অফ আর্থার গর্ডন পিম',
    authorId: 'edgar-allan-poe',
    author: 'এডগার অ্যালান পো',
    image: '/books/the_narrative_of_arthur_gordon_pym_of_nantucket.jpg',
    description: 'The Narrative of Arthur Gordon Pym of Nantucket is the only complete novel written by American writer Edgar Allan Poe. The work relates the tale of the young Arthur Gordon Pym, who stows away aboard a whaling ship called the Grampus.',
    downloadLink: '#',
    publishedDate: '20 September 2023',
  },
  {
    id: 'edgar-allan-poe-rachanasamagra',
    title: 'এডগার অ্যালান পো রচনাসমগ্র',
    authorId: 'edgar-allan-poe',
    author: 'এডগার অ্যালান পো',
    image: '/books/edgar_allan_poe_rachanasamagra.jpg',
    description: 'A collection of works by Edgar Allan Poe.',
    downloadLink: '#',
    publishedDate: '20 September 2023',
  },
];

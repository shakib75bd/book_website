'use client';

import { useState, useEffect, useRef } from 'react';
import { authors } from '@/data/authors';
import { books } from '@/data/books';
import Link from 'next/link';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredAuthors, setFilteredAuthors] = useState<typeof authors>([]);
  const [filteredBooks, setFilteredBooks] = useState<typeof books>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const searchLower = searchTerm.toLowerCase();
      
      const matchedAuthors = authors.filter((author) =>
        author.name.toLowerCase().includes(searchLower)
      ).slice(0, 5);

      const matchedBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchLower) ||
        book.author.toLowerCase().includes(searchLower)
      ).slice(0, 5);

      setFilteredAuthors(matchedAuthors);
      setFilteredBooks(matchedBooks);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClearSearch = () => {
    setSearchTerm('');
    setShowSuggestions(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-xs">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => searchTerm.trim().length > 0 && setShowSuggestions(true)}
        placeholder="এখানে লেখকের নাম অথবা বইয়ের নাম লিখে খুঁজুন..."
        className="bg-[#EAE0DA] text-sm text-gray-900 placeholder-gray-600 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      />

      {showSuggestions && (filteredAuthors.length > 0 || filteredBooks.length > 0) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg max-h-96 overflow-y-auto z-50 border border-gray-200">
          {filteredAuthors.length > 0 && (
            <div className="p-2">
              <div className="text-xs font-semibold text-gray-500 px-3 py-2">লেখক</div>
              {filteredAuthors.map((author) => {
                const bookCount = books.filter((book) => book.authorId === author.id).length;
                return (
                  <Link
                    key={author.id}
                    href={`/author/${author.id}`}
                    onClick={handleClearSearch}
                    className="block px-3 py-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <div className="font-semibold text-gray-800">{author.name}</div>
                    <div className="text-xs text-gray-500">মোট বই: {bookCount} টি</div>
                  </Link>
                );
              })}
            </div>
          )}

          {filteredBooks.length > 0 && (
            <div className="p-2 border-t border-gray-200">
              <div className="text-xs font-semibold text-gray-500 px-3 py-2">বই</div>
              {filteredBooks.map((book) => (
                <Link
                  key={book.id}
                  href={`/book/${book.id}`}
                  onClick={handleClearSearch}
                  className="block px-3 py-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <div className="font-semibold text-gray-800">{book.title}</div>
                  <div className="text-xs text-gray-500">{book.author}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {showSuggestions && filteredAuthors.length === 0 && filteredBooks.length === 0 && searchTerm.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg p-4 z-50 border border-gray-200">
          <p className="text-gray-500 text-sm text-center">কোন ফলাফল পাওয়া যায়নি</p>
        </div>
      )}
    </div>
  );
}

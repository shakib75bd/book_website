'use client';

import { useState } from 'react';
import Link from 'next/link';

const bengaliAlphabets = [
  'অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ',
  'ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ', 'ট', 
  'ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন', 'প', 'ফ', 
  'ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ', 'ষ', 'স', 'হ', 'ড়', 
  'ঢ়', 'য়', 'ৎ', 'ং', 'ঃ', '‍ঁ'
];

const AlphabetSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile/Small Screen View - After Header */}
      <div className="md:hidden bg-[#EAE0DA] p-3 shadow-md w-full">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="w-full py-2.5 px-4 bg-gray-700 hover:bg-gray-800 text-white rounded font-semibold flex justify-between items-center"
        >
          <span>বর্ণমালা দিয়ে খুঁজুন</span>
          <span>{isOpen ? '▲' : '▼'}</span>
        </button>
        {isOpen && (
          <div className="mt-3">
            <Link 
              href="/"
              onClick={() => setIsOpen(false)}
              className="block mb-2 py-2.5 px-4 bg-gray-700 hover:bg-gray-800 text-white rounded text-center font-bold"
            >
              সকল লেখক
            </Link>
            <div className="grid grid-cols-6 gap-1.5">
              {bengaliAlphabets.map((char) => (
                <Link 
                  key={char} 
                  href={`/letter/${encodeURIComponent(char)}`}
                  onClick={() => setIsOpen(false)}
                  className="py-2 bg-[#D8C3A5] hover:bg-[#C8B395] text-gray-800 rounded text-center font-semibold"
                >
                  {char}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AlphabetSidebar;

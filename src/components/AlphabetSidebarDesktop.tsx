'use client';

import Link from 'next/link';

const bengaliAlphabets = [
  'অ', 'আ', 'ই', 'ঈ', 'উ', 'ঊ', 'ঋ', 'এ', 'ঐ', 'ও', 'ঔ',
  'ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'ছ', 'জ', 'ঝ', 'ঞ', 'ট', 
  'ঠ', 'ড', 'ঢ', 'ণ', 'ত', 'থ', 'দ', 'ধ', 'ন', 'প', 'ফ', 
  'ব', 'ভ', 'ম', 'য', 'র', 'ল', 'শ', 'ষ', 'স', 'হ', 'ড়', 
  'ঢ়', 'য়', 'ৎ', 'ং', 'ঃ', '‍ঁ'
];

const AlphabetSidebarDesktop = () => {
  return (
    <aside className="hidden md:block w-48 bg-[#EAE0DA] p-3 shrink-0 overflow-y-auto">
      <h2 className="text-md font-bold mb-3 text-gray-800">বর্ণমালা দিয়ে খুঁজুন..</h2>
      <Link 
        href="/"
        className="block mb-3 py-2 px-3 bg-gray-700 hover:bg-gray-800 text-white rounded text-center text-sm font-bold"
      >
        সকল লেখক
      </Link>
      <div className="grid grid-cols-4 gap-1">
        {bengaliAlphabets.map((char) => (
          <Link 
            key={char} 
            href={`/letter/${encodeURIComponent(char)}`} 
            className="py-1.5 bg-[#D8C3A5] hover:bg-[#C8B395] text-gray-800 rounded text-center text-sm font-semibold"
          >
            {char}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default AlphabetSidebarDesktop;

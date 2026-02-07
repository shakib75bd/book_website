import Link from 'next/link';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="bg-[#4F4A45] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-20 py-4 sm:py-0">
          <div className="flex items-center gap-2 sm:gap-6 mb-4 sm:mb-0">
            <Link href="/" className="text-xl sm:text-2xl font-bold hover:text-gray-200 transition-colors">
              শান্তর লাইব্রেরী
            </Link>
            <Link 
              href="/how-to-read" 
              className="text-xs sm:text-base hover:text-gray-200 transition-colors border-l border-gray-300 pl-2 sm:pl-6"
            >
              কিভাবে বইগুলো পড়বেন ? 
            </Link>
          </div>
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;

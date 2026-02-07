import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#4F4A45] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-20 py-4 sm:py-0">
          <div className="flex items-center mb-4 sm:mb-0">
            <Link href="/" className="text-2xl font-bold">
              শান্তর লাইব্রেরী
            </Link>
          </div>
          <div className="w-full max-w-xs">
            <input
              type="text"
              placeholder="এখানে লেখকের নাম অথবা বইয়ের নাম লিখে খুঁজুন..."
              className="bg-[#EAE0DA] text-sm text-gray-900 placeholder-gray-600 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

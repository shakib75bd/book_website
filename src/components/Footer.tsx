const Footer = () => {
  return (
    <footer className="bg-[#4F4A45] text-white p-4 text-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© শান্তর লাইব্রেরী, ২০২৬</p>
        <a 
          href="https://shakib-h-shanto.me" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#EAE0DA] text-[#4F4A45] px-3 py-1 sm:px-4 sm:py-2 rounded-md hover:bg-gray-300 transition-colors font-semibold text-xs sm:text-base"
        >
          আমার সম্পর্কে
        </a>
      </div>
    </footer>
  );
};

export default Footer;

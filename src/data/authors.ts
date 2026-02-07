export interface Author {
  id: string;
  name: string;
  bio: string;
  image: string;
}

export const authors: Author[] = [
  // English Authors
  {
    id: 'agatha-christie',
    name: 'আগাথা ক্রিস্টি',
    bio: 'Dame Agatha Mary Clarissa Christie, Lady Mallowan, DBE was an English writer known for her sixty-six detective novels and fourteen short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple.',
    image: '/authors/avatar.png',
  },
  {
    id: 'wilbur-smith',
    name: 'উইলবার স্মিথ',
    bio: 'Wilbur Addison Smith was a Zambian-born British-South African novelist specializing in historical fiction about international involvement in Southern Africa across four centuries, seen from the viewpoints of both black and white families.',
    image: '/authors/wilbur.webp',
  },
  {
    id: 'edgar-allan-poe',
    name: 'এডগার অ্যালান পো',
    bio: 'Edgar Allan Poe was an American writer, poet, editor, and literary critic. Poe is best known for his poetry and short stories, particularly his tales of mystery and the macabre.',
    image: '/authors/avatar.png',
  },
  {
    id: 'jules-verne',
    name: 'জুল ভার্ন',
    bio: 'Jules Gabriel Verne was a French novelist, poet, and playwright. His collaboration with the publisher Pierre-Jules Hetzel led to the creation of the Voyages extraordinaires, a series of bestselling adventure novels including Journey to the Center of the Earth, Twenty Thousand Leagues Under the Seas, and Around the World in Eighty Days.',
    image: '/authors/avatar.png',
  },
  {
    id: 'dale-carnegie',
    name: 'ডেল কার্নেগী',
    bio: 'Dale Carnegie was an American writer and lecturer, and the developer of courses in self-improvement, salesmanship, corporate training, public speaking, and interpersonal skills. Born into poverty on a farm in Missouri, he was the author of How to Win Friends and Influence People, a bestseller that remains popular today.',
    image: '/authors/avatar.png',
  },
  {
    id: 'dan-brown',
    name: 'ড্যান ব্রাউন',
    bio: 'Daniel Gerhard Brown is an American author best known for his thriller novels, including the Robert Langdon novels Angels & Demons, The Da Vinci Code, The Lost Symbol, Inferno, and Origin. His novels are treasure hunts that usually take place over a period of 24 hours.',
    image: '/authors/avatar.png',
  },
  {
    id: 'robert-ludlum',
    name: 'রবার্ট লুডলাম',
    bio: 'Robert Ludlum was an American author of 27 thriller novels, best known as the creator of Jason Bourne from the original The Bourne Trilogy series. The number of his books in print is estimated between 300 million and 500 million copies. They have been published in 33 languages and 40 countries.',
    image: '/authors/avatar.png',
  },
  {
    id: 'sidney-sheldon',
    name: 'সিডনি শেলডন',
    bio: 'Sidney Sheldon was an American writer, director, and producer. He came to prominence in the 1930s, first working on Broadway plays and then in motion pictures, notably writing the successful comedy The Bachelor and the Bobby-Soxer, which earned him an Academy Award.',
    image: '/authors/avatar.png',
  },
  {
    id: 'sir-arthur-conan-doyle',
    name: 'স্যার আর্থার কোনান ডয়েল',
    bio: 'Sir Arthur Ignatius Conan Doyle KStJ DL was a British writer and physician. He created the character Sherlock Holmes in 1887 for A Study in Scarlet, the first of four novels and fifty-six short stories about Holmes and Dr. Watson.',
    image: '/authors/avatar.png',
  },
  {
    id: 'henry-rider-haggard',
    name: 'হেনরি রাইডার হ্যাগার্ড',
    bio: 'Sir Henry Rider Haggard was an English writer of adventure fiction, and a pioneer of the Lost World literary genre. He was also involved in agricultural reform throughout the British Empire.',
    image: '/authors/avatar.png',
  },

  // Bengali Authors
  {
    id: 'atik-sarkar',
    name: 'অভীক সরকার',
    bio: 'জন্ম পয়লা জুন উনিশশো উনআশি (১৮ জৈষ্ঠ, ১৩৮৬ বঙ্গাব্দ), ক্যালকাটা মেডিক্যাল কলেজে। বেড়ে ওঠা প্রাচীন শহর কলকাতার অলিগলিতে। খড়গপুর আই আই টি থেকে ইঞ্জিনিয়ারিং ও আই আই এম কলকাতা থেকে স্নাতক ও স্নাতকোত্তর ডিগ্রি লাভ। হায়দ্রাবাদ, মুম্বাই ইত্যাদি বিভিন্ন শহরে জীবন কাটিয়ে আপাতত কলকাতায় থিতু। লেখালেখির শুরু ২০১৫ সাল নাগাদ। লিখেছেন বিভিন্ন ব্লগ ও ম্যাগাজিনে। প্রকাশিত রম্যরচনামূলক বইটির নাম মার্কেট ভিজিট। বিবাহিত, আট বছরের কন্যাসন্তান বর্তমান। ভালবাসেন ইলিশ, ইস্টবেঙ্গল, ইয়ারবন্ধু ও ইতিহাস।',
    image: '/authors/avik-sarkar.png',
  },
  {
    id: 'arif-azad',
    name: 'আরিফ আজাদ',
    bio: 'Arif Azad is a popular young Bangladeshi writer.',
    image: '/authors/avatar.png',
  },
  {
    id: 'ahmed-sofa',
    name: 'আহমদ ছফা',
    bio: 'Ahmed Sofa was a Bangladeshi writer, thinker, novelist, poet, and public intellectual. He is regarded as one of the greatest writers in the Bengali language and the most important intellectual of Bangladesh.',
    image: '/authors/avatar.png',
  },
  {
    id: 'itihas-o-oitihasik-ghotona',
    name: 'ইতিহাস ও ঐতিহাসিক ঘটনা',
    bio: 'A collection of historical events.',
    image: '/authors/avatar.png',
  },
  {
    id: 'upendrakishore-ray-chowdhury',
    name: 'উপেন্দ্রকিশোর রায়চৌধুরী',
    bio: 'Upendrakishore Ray Chowdhury was a Bengali writer and painter. One of the most prominent figures of Bengali literature, he is most known for his children\'s literature.',
    image: '/authors/upendra.webp',
  },
  {
    id: 'zahir-raihan',
    name: 'জহির রায়হান',
    bio: 'Zahir Raihan was a Bangladeshi novelist, writer and filmmaker. He is most notable for his documentary Stop Genocide, made during the Bangladesh Liberation War.',
    image: '/authors/avatar.png',
  },
  {
    id: 'taradas-bandyopadhyay',
    name: 'তারাদাস বন্দ্যোপাধ্যায়',
    bio: 'Taradas Bandyopadhyay was an Indian novelist, short story writer, and editor. He is the son of the legendary writer Bibhutibhushan Bandyopadhyay.',
    image: '/authors/avatar.png',
  },
  {
    id: 'trijit-kar',
    name: 'ত্ৰিজিত কর',
    bio: 'Trijit Kar is a contemporary Bengali author.',
    image: '/authors/avatar.png',
  },
  {
    id: 'narayan-gangopadhyay',
    name: 'নারায়ণ গঙ্গোপাধ্যায়',
    bio: 'Narayan Gangopadhyay was an Indian novelist, poet, essayist, and short story writer, and one of the leading writers of modern Bengali literature.',
    image: '/authors/avatar.png',
  },
  {
    id: 'premendra-mitra',
    name: 'প্রেমেন্দ্র মিত্র',
    bio: 'Premendra Mitra was an Indian poet, novelist, short story writer, and filmmaker, who is also regarded as an eminent figure in Bengali literature.',
    image: '/authors/avatar.png',
  },
  {
    id: 'bankim-chandra-chattopadhyay',
    name: 'বঙ্কিমচন্দ্র চট্টোপাধ্যায়',
    bio: 'Bankim Chandra Chatterjee or Bankim Chandra Chattopadhyay, CIE was an Indian novelist, poet and journalist. He was the composer of Vande Mataram, originally in Sanskrit, personifying India as a mother goddess and inspiring activists during the Indian Independence Movement.',
    image: '/authors/avatar.png',
  },
  {
    id: 'bibhutibhushan-bandyopadhyay',
    name: 'বিভূতিভূষণ বন্দ্যোপাধ্যায়',
    bio: 'Bibhutibhushan Bandyopadhyay was an Indian writer in the Bengali language. His best known work is the autobiographical novel, Pather Panchali, which was later adapted into a film of the same name by Satyajit Ray.',
    image: '/authors/avatar.png',
  },
  {
    id: 'buddhadeb-guha',
    name: 'বুদ্ধদেব গুহ',
    bio: 'Buddhadeb Guha was an Indian writer of fiction in the Bengali language. He was the author of over two hundred books, including novels, short story collections, and non-fiction.',
    image: '/authors/avatar.png',
  },
  {
    id: 'manik-bandyopadhyay',
    name: 'মানিক বন্দ্যোপাধ্যায়',
    bio: 'Manik Bandyopadhyay was an Indian writer and one of the leading figures of modern Bengali literature. During a short lifespan of 48 years, he wrote 36 novels and over 250 short stories.',
    image: '/authors/avatar.png',
  },
  {
    id: 'mohammad-nazim-uddin',
    name: 'মোহাম্মদ নাজিম উদ্দিন',
    bio: 'Mohammad Nazim Uddin is a Bangladeshi writer, known for his thriller novels.',
    image: '/authors/avatar.png',
  },
  {
    id: 'rabindranath-tagore',
    name: 'রবীন্দ্রনাথ ঠাকুর',
    bio: 'Rabindranath Tagore was a Bengali polymath who worked as a poet, writer, playwright, composer, philosopher, social reformer and painter. He reshaped Bengali literature and music, as well as Indian art with Contextual Modernism in the late 19th and early 20th centuries.',
    image: '/authors/avatar.png',
  },
  {
    id: 'lila-majumdar',
    name: 'লীলা মজুমদার',
    bio: 'Lila Majumdar was an Indian Bengali-language writer. She was a prolific writer, with over 125 books to her credit.',
    image: '/authors/avatar.png',
  },
  {
    id: 'sarat-chandra-chattopadhyay',
    name: 'শরৎচন্দ্র চট্টোপাধ্যায়',
    bio: 'Sarat Chandra Chattopadhyay, also known as Sarat Chandra Chatterjee, was a Bengali novelist and short story writer of the early 20th century. He is one of the most popular and translated authors in Bengali literature.',
    image: '/authors/avatar.png',
  },
  {
    id: 'sharadindu-bandyopadhyay',
    name: 'শরদিন্দু বন্দ্যোপাধ্যায়',
    bio: 'Sharadindu Bandyopadhyay was an Indian Bengali-language writer. He was also actively involved with Bengali cinema as well as Bollywood. His most famous creation is the fictional detective Byomkesh Bakshi.',
    image: '/authors/avatar.png',
  },
  {
    id: 'shibram-chakraborty',
    name: 'শিবরাম চক্রবর্তী',
    bio: 'Shibram Chakraborty was an Indian writer, humorist, and revolutionary. He is best known for his humorous stories.',
    image: '/authors/avatar.png',
  },
  {
    id: 'shirshendu-mukhopadhyay',
    name: 'শীর্ষেন্দু মুখোপাধ্যায়',
    bio: 'Shirshendu Mukhopadhyay is a Bengali novelist and short story writer from India. He has written more than two hundred books for adults and children.',
    image: '/authors/avatar.png',
  },
  {
    id: 'sanjib-chattopadhyay',
    name: 'সঞ্জীব চট্টোপাধ্যায়',
    bio: 'Sanjib Chattopadhyay is an Indian writer, novelist and journalist in Bengali. He is known for his humorous and witty writing style.',
    image: '/authors/avatar.png',
  },
  {
    id: 'satyajit-ray',
    name: 'সত্যজিৎ রায়',
    bio: 'Satyajit Ray was an Indian filmmaker, screenwriter, documentary filmmaker, author, essayist, lyricist, magazine editor, illustrator, calligrapher, and music composer. Ray is celebrated for works such as The Apu Trilogy, The Music Room, The Big City, and Charulata.',
    image: '/authors/avatar.png',
  },
  {
    id: 'samaresh-majumdar',
    name: 'সমরেশ মজুমদার',
    bio: 'Samaresh Majumdar was an Indian writer from West Bengal, India. He was best known for his Animesh series of novels.',
    image: '/authors/avatar.png',
  },
  {
    id: 'sukumar-ray',
    name: 'সুকুমার রায়',
    bio: 'Sukumar Ray was a Bengali writer and poet from the Indian subcontinent. He is remembered mainly for his writings for children. He was the son of children\'s story writer Upendrakishore Ray Chowdhury and the father of Indian filmmaker Satyajit Ray.',
    image: '/authors/avatar.png',
  },
  {
    id: 'sunil-gangopadhyay',
    name: 'সুনীল গঙ্গোপাধ্যায়',
    bio: 'Sunil Gangopadhyay or Sunil Ganguly was an Indian poet, short story writer, and novelist in the Bengali language. He was one of the most prominent figures in Bengali literature for more than four decades.',
    image: '/authors/avatar.png',
  },
  {
    id: 'syed-mustafa-siraj',
    name: 'সৈয়দ মুস্তাফা সিরাজ',
    bio: 'Syed Mustafa Siraj was an Indian writer. He was one of the most prominent figures in modern Bengali literature.',
    image: '/authors/avatar.png',
  },
  {
    id: 'humayun-ahmed',
    name: 'হুমায়ূন আহমেদ',
    bio: 'Humayun Ahmed was a Bangladeshi novelist, short-story writer, dramatist and filmmaker. He was one of the most popular authors in Bengali literature.',
    image: '/authors/avatar.png',
  },
  {
    id: 'hemendra-kumar-roy',
    name: 'হেমেন্দ্রকুমার রায়',
    bio: 'Hemendra Kumar Roy was an Indian Bengali writer, noted for his children\'s literature. He was also a filmmaker, and is credited with the co-direction of the first Bengali talkie, Jamai Shashthi.',
    image: '/authors/avatar.png',
  },
];

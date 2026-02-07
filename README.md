# শান্তর লাইব্রেরী (Shanto's Library)

A modern, responsive web application for browsing and downloading Bengali books and translated works. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Author Directory**: Browse all authors alphabetically with profile images and bio
- **Alphabet Navigation**: Quick access to authors by first letter using sidebar navigation
- **Author Pages**: Dedicated pages for each author showing their biography and complete book collection
- **Book Details**: Individual book pages with descriptions and download options
- **Direct Downloads**: Download books directly from Google Drive or other sources
- **Responsive Design**: Fully responsive layout that works on all devices
- **Search Functionality**: Search for authors and books by name
- **Placeholder Images**: Automatic fallback to default images for missing author/book covers

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image Component
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
book_website/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage with all authors
│   │   ├── author/[authorId]/    # Dynamic author pages
│   │   ├── book/[bookId]/        # Dynamic book pages
│   │   └── letter/[char]/        # Authors filtered by letter
│   ├── components/
│   │   ├── AlphabetSidebar.tsx   # Sidebar navigation
│   │   ├── AuthorImage.tsx       # Author image with fallback
│   │   ├── AuthorSection.tsx     # Author listing component
│   │   └── FilteredAuthorList.tsx
│   └── data/
│       ├── authors.ts            # All author data
│       └── books.ts              # All book data
├── public/
│   ├── authors/                  # Author images
│   │   └── avatar.png           # Default author placeholder
│   └── books/                    # Book cover images
│       └── books_default.png    # Default book placeholder
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd book_website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Adding Content

### Adding a New Author

Edit `src/data/authors.ts`:

```typescript
{
  id: 'author-slug',
  name: 'লেখকের নাম',
  bio: 'লেখকের সম্পর্কে বিস্তারিত তথ্য...',
  image: '/authors/author-name.jpg', // or '/authors/avatar.png' for default
}
```

### Adding a New Book

Edit `src/data/books.ts`:

```typescript
{
  id: 'book-slug',
  title: 'বইয়ের নাম',
  authorId: 'author-slug', // Must match author's id
  author: 'লেখকের নাম',
  image: '/books/book-cover.jpg', // or '/books/books_default.png' for default
  description: 'বইয়ের বিস্তারিত বর্ণনা',
  downloadLink: 'https://drive.google.com/...', // Use '#' if not available yet
  publishedDate: '2024',
}
```

### Adding Images

- **Author images**: Place in `public/authors/` (use `.jpg`, `.png`, or `.webp`)
- **Book covers**: Place in `public/books/`
- Images automatically fall back to placeholders if not found

## 🏗️ Building for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Environment Variables

No environment variables required for basic functionality.

## 📱 Features Breakdown

### Homepage
- Displays all authors grouped alphabetically
- Shows book count for each author
- Quick navigation via alphabet sidebar

### Author Pages
- Author biography and profile image
- Grid display of all books by the author
- Direct download buttons for each book

### Book Pages
- Book cover and title
- Author information
- Detailed description
- Download button

### Navigation
- Alphabet sidebar for quick author lookup
- Responsive mobile navigation
- Search functionality in header

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🐛 Known Issues

- Download links opening in new tabs for Google Drive links
- Image optimization may require additional configuration for external images

## 📞 Contact

For questions or suggestions, please open an issue in the repository.

---

Built with ❤️ using Next.js

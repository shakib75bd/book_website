import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { readFile } from 'fs/promises';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const title = formData.get('title') as string;
    const authorId = formData.get('authorId') as string;
    const author = formData.get('author') as string;
    const description = formData.get('description') as string;
    const downloadLink = formData.get('downloadLink') as string;
    const publishedDate = formData.get('publishedDate') as string;
    const imageFile = formData.get('image') as File | null;

    // Clean up title and description
    const cleanTitle = title
      .replace(/\t/g, ' ')
      .replace(/\n/g, ' ')
      .replace(/\r/g, ' ')
      .replace(/'/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    
    const cleanDescription = description
      .replace(/\t/g, ' ')  // Replace tabs with spaces
      .replace(/\n/g, ' ')  // Replace line breaks with spaces
      .replace(/\r/g, ' ')  // Replace carriage returns
      .replace(/'/g, '')    // Remove single quotes to avoid breaking strings
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();

    // Generate book ID from title
    const bookId = cleanTitle
      .toLowerCase()
      .replace(/[^\u0980-\u09FFa-z0-9\s-]/g, '') // Keep Bengali, English, numbers
      .trim()
      .replace(/\s+/g, '-');

    let imagePath = '/books/books_default.png';

    // Handle image upload if provided
    if (imageFile) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Create unique filename
      const extension = imageFile.name.split('.').pop();
      const filename = `${bookId}.${extension}`;
      const publicPath = path.join(process.cwd(), 'public', 'books', filename);

      // Ensure directory exists
      const booksDir = path.join(process.cwd(), 'public', 'books');
      if (!existsSync(booksDir)) {
        await mkdir(booksDir, { recursive: true });
      }

      // Save file
      await writeFile(publicPath, buffer);
      imagePath = `/books/${filename}`;
    }

    // Read current books.ts file
    const booksFilePath = path.join(process.cwd(), 'src', 'data', 'books.ts');
    const booksFileContent = await readFile(booksFilePath, 'utf-8');

    // Create new book object
    const newBook = `  {
    id: '${bookId}',
    title: '${cleanTitle}',
    authorId: '${authorId}',
    author: '${author}',
    image: '${imagePath}',
    description: '${cleanDescription}',
    downloadLink: '${downloadLink}',
    publishedDate: '${publishedDate}',
  },`;

    // Find the last book entry and add new book after it
    const lastBookMatch = booksFileContent.lastIndexOf('  },');
    
    if (lastBookMatch === -1) {
      return NextResponse.json(
        { error: 'Could not find proper insertion point in books.ts' },
        { status: 500 }
      );
    }

    const beforeLastBook = booksFileContent.substring(0, lastBookMatch + 4);
    const afterLastBook = booksFileContent.substring(lastBookMatch + 4);

    const updatedContent = beforeLastBook + '\n' + newBook + afterLastBook;

    // Write updated content back to books.ts
    await writeFile(booksFilePath, updatedContent, 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Book added successfully',
      bookId,
      imagePath,
    });
  } catch (error) {
    console.error('Error adding book:', error);
    return NextResponse.json(
      { error: 'Failed to add book: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

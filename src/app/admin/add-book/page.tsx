'use client';

import { useState } from 'react';
import { authors } from '@/data/authors';

export default function AddBookPage() {
  const [formData, setFormData] = useState({
    title: '',
    authorId: '',
    author: '',
    description: '',
    downloadLink: '',
    publishedDate: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Create FormData for file upload
      const data = new FormData();
      data.append('title', formData.title);
      data.append('authorId', formData.authorId);
      data.append('author', formData.author);
      data.append('description', formData.description);
      data.append('downloadLink', formData.downloadLink);
      data.append('publishedDate', formData.publishedDate);
      
      if (imageFile) {
        data.append('image', imageFile);
      }

      const response = await fetch('/api/add-book', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('✅ বই সফলভাবে যুক্ত হয়েছে! পেজ রিফ্রেশ করুন।');
        // Reset form
        setFormData({
          title: '',
          authorId: '',
          author: '',
          description: '',
          downloadLink: '',
          publishedDate: '',
        });
        setImageFile(null);
        // Reset file input
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setMessage('❌ Error: ' + result.error);
      }
    } catch (error) {
      setMessage('❌ Error: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleAuthorChange = (authorId: string) => {
    const selectedAuthor = authors.find((a) => a.id === authorId);
    setFormData({
      ...formData,
      authorId,
      author: selectedAuthor?.name || '',
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        setImageFile(file);
      } else {
        setMessage('❌ শুধুমাত্র ছবি ফাইল আপলোড করুন');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setImageFile(files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">নতুন বই যুক্ত করুন</h1>
        
        {message && (
          <div className={`mb-6 p-4 rounded-md ${message.includes('✅') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Book Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              বইয়ের নাম *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="বইয়ের নাম লিখুন"
            />
          </div>

          {/* Author Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              লেখক নির্বাচন করুন *
            </label>
            <select
              required
              value={formData.authorId}
              onChange={(e) => handleAuthorChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">লেখক নির্বাচন করুন</option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              বইয়ের বর্ণনা *
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="বইয়ের সংক্ষিপ্ত বর্ণনা লিখুন"
            />
          </div>

          {/* Download Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ডাউনলোড লিংক *
            </label>
            <input
              type="url"
              required
              value={formData.downloadLink}
              onChange={(e) => setFormData({ ...formData, downloadLink: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://drive.google.com/..."
            />
          </div>

          {/* Published Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              প্রকাশের তারিখ
            </label>
            <input
              type="text"
              value={formData.publishedDate}
              onChange={(e) => setFormData({ ...formData, publishedDate: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="২০২৪"
            />
          </div>

          {/* Book Cover Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              বইয়ের কভার ছবি
            </label>
            
            {/* Drag and Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragging
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 bg-gray-50 hover:border-gray-400'
              }`}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="file-upload"
              />
              
              <div className="pointer-events-none">
                {imageFile ? (
                  <div className="space-y-2">
                    <svg
                      className="mx-auto h-12 w-12 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <p className="text-sm font-medium text-gray-900">
                      {imageFile.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(imageFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer font-medium text-blue-600 hover:text-blue-500"
                      >
                        <span>ছবি আপলোড করুন</span>
                      </label>
                      <p className="pl-1">অথবা ড্র্যাগ এন্ড ড্রপ করুন</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, WEBP (MAX. 5MB)</p>
                  </div>
                )}
              </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-2">
              ছবি না দিলে ডিফল্ট প্লেসহোল্ডার ব্যবহার হবে
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold"
          >
            {loading ? 'যুক্ত হচ্ছে...' : 'বই যুক্ত করুন'}
          </button>
        </form>

        <div className="mt-8 p-4 bg-yellow-50 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">⚠️ গুরুত্বপূর্ণ নোট:</h3>
          <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
            <li>বই যুক্ত করার পর সাইট রিবিল্ড করতে হবে</li>
            <li>ডেভেলপমেন্ট মোডে `npm run dev` থেকে restart করুন</li>
            <li>প্রোডাকশনে ডিপ্লয় করতে git push করুন</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function AuthorImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={120}
      height={120}
      className="rounded-full object-cover border-4 border-white shadow-sm"
      onError={() => {
        setImgSrc('/no-image.svg');
      }}
    />
  );
}

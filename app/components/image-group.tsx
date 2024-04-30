'use client';

import { useApp } from '@/app/providers/app-provider';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function ImageGroup() {
  const { image, setImage } = useApp();

  // if (!image) {
  //   return null;
  // }

  return (
    <div
      className="relative shadow-lg bg-card border-x border-t mt-6 group aspect-video rounded-t-lg bg-center bg-cover"
      style={{
        // NOTE: for Safari
        backgroundImage: `url(${image})`,
      }}
    >
      {/* <img src={image} alt="" className="rounded-lg block max-w-lg max-h-60" /> */}
    </div>
  );
}

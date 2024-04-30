'use client';

import Canvas from '@/app/components/canvas';
import ImageDropzone from '@/app/components/image-dropzone';
import Sidebar from '@/app/components/sidebar';

export default function Home() {
  return (
    <ImageDropzone>
      <div className="flex min-h-[100dvh]">
        <Sidebar />
        <div className="flex items-center justify-center flex-1">
          <Canvas />
        </div>
      </div>
    </ImageDropzone>
  );
}

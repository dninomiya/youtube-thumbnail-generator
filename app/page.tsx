'use client';

import Canvas from '@/app/components/canvas';
import ImageDropzone from '@/app/components/image-dropzone';
import Sidebar from '@/app/components/sidebar';
import { Data } from '@/types/data';
import { FormProvider, useForm } from 'react-hook-form';

export default function Home() {
  const methods = useForm<Data>({
    defaultValues: {
      part: 1,
      live: true,
      title: '',
      stackIds: ['nextjs'],
    },
  });

  return (
    <FormProvider {...methods}>
      <ImageDropzone>
        <div className="flex min-h-[100dvh]">
          <Sidebar />
          <div className="flex items-center justify-center flex-1">
            <Canvas />
          </div>
        </div>
      </ImageDropzone>
    </FormProvider>
  );
}

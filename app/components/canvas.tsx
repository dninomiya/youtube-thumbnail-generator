import ImageGroup from '@/app/components/image-group';
import { cn } from '@/lib/utils';
import { Data } from '@/types/data';
import { Radio } from 'lucide-react';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

export default function Canvas() {
  const { watch } = useFormContext<Data>();

  return (
    <div
      id="canvas"
      className={cn(
        'relative w-[800px] ring-border ring-1 overflow-hidden aspect-video pt-6 px-6 gap-20 bg-zinc-50'
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="px-2 font-bold bg-black text-white py-1 rounded-md">
          PART {watch('part')}
        </div>

        {watch('stackIds').map((id) => (
          <div key={id} className="size-8 relative">
            <Image
              className="h-8"
              src={`/youtube-thumbnail-generator/${id}.svg`}
              alt=""
              fill
            />
          </div>
        ))}

        <span className="flex-1"></span>

        {watch('live') && (
          <div className="px-2 font-bold flex items-center gap-2 bg-red-500 text-white py-1 rounded-md">
            LIVE
            <Radio size={18} />
          </div>
        )}
      </div>
      <ImageGroup />

      <h1 className="absolute bottom-8 space-y-1 left-0">
        {watch('title')
          .split('\n')
          .filter(Boolean)
          .map((line, i) => (
            <span
              className="bg-primary block font-bold px-1.5 py-1 text-5xl/none w-fit text-primary-foreground"
              key={i}
            >
              {line}
            </span>
          ))}
      </h1>
    </div>
  );
}

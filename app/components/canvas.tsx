import ImageGroup from '@/app/components/image-group';
import { cn } from '@/lib/utils';
import { Radio } from 'lucide-react';
import Image from 'next/image';

export default function Canvas() {
  return (
    <div
      id="canvas"
      className={cn(
        'relative w-[800px] ring-border ring-1 overflow-hidden aspect-video pt-6 px-6 gap-20 bg-muted/20'
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="px-2 font-bold bg-black text-white py-1 rounded-md">
          PART 1
        </div>
        <Image
          src="/youtube-thumbnail-generator/nextjs.svg"
          alt=""
          width={32}
          height={32}
        />
        <span className="flex-1"></span>
        <div className="px-2 font-bold flex items-center gap-2 bg-red-500 text-white py-1 rounded-md">
          LIVE
          <Radio size={18} />
        </div>
      </div>
      <ImageGroup />

      <h1 className="absolute bottom-8 space-y-1 left-0">
        {`タイトル

xx
ああ`
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

import CopyButton from '@/app/components/copy-button';
import DownloadButton from '@/app/components/download-button';
import { ModeToggle } from '@/app/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { icons } from '@/data/icons';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className="w-[320px] border-r flex flex-col">
      <div className="flex-1 p-4 space-y-4">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="part">PART</Label>
          <Input
            id="part"
            type="number"
            min={1}
            defaultValue="1"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="live">LIVE</Label>
          <Switch id="live" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">タイトル</Label>
          <Textarea id="title" defaultValue="" />
        </div>

        <div className="space-y-3">
          <h3 className="font-medium text-sm">スタック</h3>
          <div className="border rounded-md">
            <div className="border-b p-2 grid grid-cols-5 h-12 gap-2"></div>
            <div className="grid grid-cols-6 gap-1 p-1">
              {icons.map((icon) => (
                <Button key={icon.id} size="icon" variant="ghost">
                  <Image
                    src={`/youtube-thumbnail-generator/${icon.id}.svg`}
                    alt=""
                    width={20}
                    height={20}
                  />
                  <span className="sr-only">{icon.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end bg-muted border-t p-4 items-center gap-2">
        <ModeToggle />
        <DownloadButton />
        <CopyButton />
      </div>
    </div>
  );
}

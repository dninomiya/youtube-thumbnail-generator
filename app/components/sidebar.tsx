import CopyButton from '@/app/components/copy-button';
import DownloadButton from '@/app/components/download-button';
import { ModeToggle } from '@/app/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { icons } from '@/data/icons';
import { Data } from '@/types/data';
import Image from 'next/image';
import { Controller, useFormContext } from 'react-hook-form';

export default function Sidebar() {
  const { register, setValue, control, getValues, watch } =
    useFormContext<Data>();

  console.log(watch());

  return (
    <div className="w-[320px] border-r flex flex-col">
      <div className="flex-1 p-4 space-y-4">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="part">PART</Label>
          <Input
            id="part"
            type="number"
            {...register('part')}
            min={1}
            defaultValue="1"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="live">LIVE</Label>
          <Controller
            name="live"
            control={control}
            render={({ field }) => (
              <Switch
                defaultChecked={field.value}
                onCheckedChange={(value) => {
                  field.onChange(value);
                }}
                id="live"
              />
            )}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">タイトル</Label>
          <Textarea {...register('title')} id="title" defaultValue="" />
        </div>

        <div className="space-y-3">
          <h3 className="font-medium text-sm">スタック</h3>
          <div className="border rounded-md">
            <div className="border-b grid grid-cols-6 gap-1 p-1 h-12">
              {watch('stackIds').map((id) => (
                <Button
                  onClick={() => {
                    setValue(
                      'stackIds',
                      getValues('stackIds').filter((stackId) => stackId !== id)
                    );
                  }}
                  key={id}
                  size="icon"
                  variant="ghost"
                >
                  <Image
                    src={`/youtube-thumbnail-generator/${id}.svg`}
                    alt=""
                    width={20}
                    height={20}
                  />
                  <span className="sr-only">{id}のアイコンを削除</span>
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-6 gap-1 p-1">
              {icons.map((icon) => (
                <Button
                  onClick={() => {
                    setValue('stackIds', [
                      ...(getValues('stackIds') || []),
                      icon.id,
                    ]);
                  }}
                  key={icon.id}
                  size="icon"
                  variant="ghost"
                  disabled={getValues('stackIds').includes(icon.id)}
                >
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

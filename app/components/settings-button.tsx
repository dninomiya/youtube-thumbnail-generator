import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Settings, SlidersHorizontal } from 'lucide-react';

export default function SettingsButon() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <SlidersHorizontal size={20} />
          <span className="sr-only">設定</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">設定</h4>
            <p className="text-sm text-muted-foreground">
              サムネイルをカスタマイズ
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="part">PART</Label>
              <Input id="part" defaultValue="1" className="col-span-2 h-8" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="live" />
              <label
                htmlFor="live"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                LIVE
              </label>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

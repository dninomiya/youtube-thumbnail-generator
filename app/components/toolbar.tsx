import CopyButton from '@/app/components/copy-button';
import DownloadButton from '@/app/components/download-button';
import { ModeToggle } from '@/app/components/mode-toggle';
import SetImageButton from '@/app/components/set-image-button';
import SettingsButon from '@/app/components/settings-button';
import StackSelector from '@/app/components/stack-selector';

export default function ToolBar() {
  return (
    <div className="fixed shadow border bottom-8 gap-2 left-1/2 -translate-x-1/2 rounded-full flex items-center bg-muted p-2">
      <StackSelector />
      <SettingsButon />
      <SetImageButton />
      <ModeToggle />
      <DownloadButton />
      <CopyButton />
    </div>
  );
}

import Sidebar from '@/components/sidebar/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-screen flex max-h-screen flex-row justify-between overflow-hidden">
      <ScrollArea className="flex-1">{children}</ScrollArea>
      <ScrollArea className="flex-shrink-0 bg-slate-900 p-4">
        <Sidebar />
      </ScrollArea>
    </div>
  );
}

import { ScrollArea } from '@/components/ui/scroll-area';

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden">
      <ScrollArea className="flex-1 overflow-y-auto bg-pink-800">
        {children}
      </ScrollArea>
    </div>
  );
}

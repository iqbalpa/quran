import { ScrollArea } from '@/components/ui/scroll-area';

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-1 overflow-hidden overflow-y-auto">
      {children}
    </div>
  );
}

import Sidebar from '@/components/sidebar/sidebar';

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full flex-row justify-between gap-6">
      <main className="flex grow justify-center">{children}</main>
      <div className="min-h-screen w-[300px] bg-slate-900 p-4">
        <Sidebar />
      </div>
    </div>
  );
}

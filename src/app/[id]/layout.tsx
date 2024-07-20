import BackButton from '@/components/backButton/backButton';

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex h-screen flex-1 overflow-hidden overflow-y-auto">
      <BackButton />
      {children}
    </div>
  );
}

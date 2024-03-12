export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mt-[60px]">{children}</main>;
}

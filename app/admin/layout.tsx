import AdminNav from "./AdminNav";

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminNav />
      <div className="container my-6">{children}</div>
    </>
  );
}

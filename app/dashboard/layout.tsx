import { Navbar, Sidebar } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen bg-lightWhite flex flex-row">
      <Sidebar />
      <section className="w-[80vw] h-screen">
        <Navbar />
        <div className="p-5 h-[90vh]">{children}</div>
      </section>
    </div>
  );
}

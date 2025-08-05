import { Navbar } from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed z-50 top-0 w-full px-4 h-14 border-b shadow-sm bg-white flex items-center gap-x-4">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;

import React from "react";
import { Navbar } from "./_components/navbar";

const marketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100 grainy">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100 grainy">{children}</main>
      {/* Footer */}
    </div>
  );
};

export default marketingLayout;

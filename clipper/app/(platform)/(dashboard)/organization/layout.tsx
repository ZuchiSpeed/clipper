import React from "react";
import { Sidebar } from "../_components/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-20 md:pt-1 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">
          {/* Sidebar can be added here */}
          <Sidebar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;

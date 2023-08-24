import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }: any) => {
  return (
    <div className="flex text-black h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-auto">
        <div>
        <Navbar />
        </div>
        {/* Page content */}
        {/* use AppContext for collapsible content */}
        <main className="my-20 pl-6 w-4/5 ml-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
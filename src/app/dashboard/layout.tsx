import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-grow">
      <Sidebar />
      <div className="grid flex-1 place-content-center">{children}</div>
    </div>
  );
};

export default DashboardLayout;

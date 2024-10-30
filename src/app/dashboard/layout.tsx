import DashboardNav from "@/components/dashboard/dashboard-nav";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-grow">
      <Sidebar />
      <div className="flex-1">
        <DashboardNav />
        <div className="min-h-[100vh] bg-mybg2">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

import DashboardNav from "@/components/dashboard/dashboard-nav";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-row items-start">
      <Sidebar />
      <div className="flex-1">
        <DashboardNav />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

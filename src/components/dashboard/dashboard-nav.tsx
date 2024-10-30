import React from "react";
import ThemeToggle from "../theme-toggle";
import { Button } from "../ui/button";

const DashboardNav = () => {
  return (
    <nav className="flex h-16 items-center justify-end gap-x-4 border-b px-12 py-2">
      <ThemeToggle />
      <div className="h-7 w-[1px] bg-black/50 dark:bg-white/30"></div>
      <Button
        size={"lg"}
        className="bg-gradient-to-r from-myaccent5 to-myaccent7 font-heading2 text-base font-medium text-white transition-colors duration-300 hover:from-myaccent5 hover:to-myaccent6"
      >
        Create
      </Button>
    </nav>
  );
};

export default DashboardNav;

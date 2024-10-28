import { cn } from "@/lib/utils";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={cn("mx-auto max-w-[1200px]", className)}>{children}</div>
  );
};

export default Wrapper;

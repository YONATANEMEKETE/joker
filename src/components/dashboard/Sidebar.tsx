import Image from "next/image";
import Link from "next/link";
import React from "react";
import logowithout from "../../../public/logowithout.png";
import { title } from "process";
import { link } from "fs";
import { dashboardLinks } from "@/constants/data";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { createClient } from "@/utils/supabase/server";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { ChevronRight, LogOut } from "lucide-react";
import { logout } from "@/actions/auth";

const Sidebar = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="fixed inset-y-0 left-0 flex w-1/6 min-w-[250px] max-w-[250px] flex-col justify-between border-r bg-mybg2 pb-4 pt-6">
      <div className="space-y-6">
        <Link href={"/"} className="cursor-pointer">
          <Image
            src={logowithout}
            alt="Joker logo"
            width={150}
            height={50}
            className="ml-4"
          />
        </Link>
        <div className="h-[1px] w-full bg-border"></div>
        <div className="w-full space-y-2 px-6">
          <h2 className="font-heading2 text-base font-semibold text-mytext">
            Dashboard
          </h2>
          <div className="flex flex-col">
            {dashboardLinks.map((link) => (
              <Link
                href={link.link}
                key={link.title}
                className="group flex cursor-pointer items-center gap-x-4 rounded-md px-4 py-2 transition-colors duration-300 hover:bg-mybg1"
              >
                <link.Icon
                  size={22}
                  className="text-mytextlight group-hover:text-mytext"
                />
                <p className="font-heading2 text-sm font-semibold text-mytextlight group-hover:text-mytext">
                  {link.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="h-[1px] w-full bg-border"></div>
        <div className="w-full px-2">
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex cursor-pointer items-center justify-between rounded-sm p-2">
                <div className="flex max-w-[80%] items-center gap-x-2">
                  <Avatar>
                    <AvatarFallback className="rounded-full bg-mybg1 font-heading2 text-base font-semibold text-mytext ring-2 ring-mytext ring-offset-4 ring-offset-mybg2">
                      {user?.user_metadata.name.charAt(0)}
                    </AvatarFallback>
                    <AvatarImage src={user?.user_metadata.avatar_url} />
                  </Avatar>
                  <div className="-space-y-0.5">
                    <p className="line-clamp-1 font-heading2 text-sm font-semibold text-mytext">
                      {user?.user_metadata.name}
                    </p>
                    <p className="line-clamp-1 font-heading2 text-xs font-semibold text-mytextlighter">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent
              side="right"
              asChild
              className="max-w-[200px] border p-1"
            >
              <form action={logout} className="w-full">
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="flex w-full items-center justify-start gap-x-4 border-none px-5 font-heading2 text-sm font-semibold text-mytextlight hover:bg-mybg1"
                >
                  <LogOut />
                  Log Out
                </Button>
              </form>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

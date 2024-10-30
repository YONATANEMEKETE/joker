import React from "react";
import Wrapper from "./ui/Wrapper";
import Image from "next/image";
import logowith from "../../public/logowith.png";
import logowithout from "../../public/logowithout.png";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

const Nav = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="h-16 border-b bg-mybg2">
      <Wrapper className="flex h-full w-full items-center justify-between">
        <Link href={"/"} className="cursor-pointer">
          <Image src={logowith} alt="Joker logo" width={200} height={150} />
        </Link>
        <div className="flex items-center gap-x-6">
          <ThemeToggle />
          <div className="h-7 w-[1px] bg-black/50 dark:bg-white/30"></div>
          {user ? (
            <Link href={"/dashboard/explore"}>
              <Button
                size={"lg"}
                className="bg-gradient-to-r from-myaccent5 to-myaccent7 font-heading2 text-base font-medium text-white transition-colors duration-300 hover:from-myaccent5 hover:to-myaccent6"
              >
                Explore
              </Button>
            </Link>
          ) : (
            <div className="flex items-center gap-x-4">
              <Link href={"/signin"}>
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="border-myaccent2 bg-mybg2 font-heading2 text-base font-medium text-mytext transition-colors duration-300 hover:bg-mybg1"
                >
                  Sign In
                </Button>
              </Link>
              <Link href={"/signup"}>
                <Button
                  size={"lg"}
                  className="bg-gradient-to-r from-myaccent5 to-myaccent7 font-heading2 text-base font-medium text-white transition-colors duration-300 hover:from-myaccent5 hover:to-myaccent6"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Wrapper>
    </nav>
  );
};

export default Nav;

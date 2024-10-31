import React from "react";
import ThemeToggle from "../theme-toggle";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";

const DashboardNav = () => {
  return (
    <nav className="flex h-16 items-center justify-end gap-x-4 border-b px-12 py-2">
      <ThemeToggle />
      <div className="h-7 w-[1px] bg-black/50 dark:bg-white/30"></div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size={"lg"}
            className="bg-gradient-to-r from-myaccent5 to-myaccent7 font-heading2 text-base font-medium text-white transition-colors duration-300 hover:from-myaccent5 hover:to-myaccent6"
          >
            Create
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-heading2 text-lg font-semibold text-mytext">
              Post your Joke
            </DialogTitle>
            <DialogDescription className="font-heading2 text-base text-mytextlight">
              Let the community laugh 😀 with you
            </DialogDescription>
          </DialogHeader>
          <form className="mt-10 w-full space-y-5">
            <Textarea
              placeholder="What's on your mind?"
              className="min-h-40 resize-y"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-br from-myaccent5 to-myaccent7 font-heading2 text-base font-medium text-white transition-colors duration-300 hover:from-myaccent5 hover:to-myaccent6"
            >
              Post
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default DashboardNav;

"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Heart, MessageSquare, MoreVertical, Send } from "lucide-react";
import { Liked } from "./Like";
import { Input } from "../ui/input";
import Comment from "./Comment";

const PostCard = () => {
  const [isLiked, setIsLiked] = useState<boolean>(true);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card className="w-[600px] min-w-[300px] bg-mybg2">
      <CardHeader className="">
        <div className="flex items-center justify-between">
          <div className="flex cursor-pointer items-center gap-x-2">
            <Avatar className="size-12">
              <AvatarFallback className="rounded-full bg-myaccent5 font-heading2 text-base font-semibold text-white">
                Y
              </AvatarFallback>
              <AvatarImage />
            </Avatar>
            <div className="">
              <p className="font-heading2 text-sm font-semibold text-mytext">
                YonataneMekete
              </p>
              <p className="font-heading2 text-xs font-semibold text-mytextlighter">
                4 hours ago
              </p>
            </div>
          </div>
          <Button
            variant={"outline"}
            size={"sm"}
            className="grid place-content-center px-1 font-semibold text-mytext hover:bg-mybg1"
          >
            <MoreVertical size={20} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pb-4 pl-8">
        <p className="font-body text-base font-semibold text-mytext">
          What do you call a douch working hard aday and night to change his
          life? Nerd😁
        </p>
        <div className="flex items-center gap-x-6">
          <Button
            variant={"outline"}
            size={"lg"}
            onClick={handleLike}
            className="flex items-center gap-x-4 px-4 hover:bg-mybg2"
          >
            {isLiked ? (
              <Liked />
            ) : (
              <Heart size={24} className="text-mytextlight" />
            )}

            <p className="font-heading2 text-base font-semibold text-mytextlight">
              42
            </p>
          </Button>
          <div className="flex items-start gap-x-2">
            <MessageSquare size={24} className="text-mytextlight" />
            <p className="font-heading2 text-base font-semibold text-mytextlight">
              6
            </p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-mytextlighter"></div>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-10 pl-8">
        <div className="flex w-full items-center gap-x-2">
          <Avatar className="size-10 cursor-pointer">
            <AvatarFallback className="rounded-full bg-myaccent8 font-heading2 text-base font-semibold text-white">
              Y
            </AvatarFallback>
            <AvatarImage />
          </Avatar>
          <form className="flex flex-1 items-center gap-x-2">
            <Input
              type="text"
              placeholder="Write a comment..."
              name="comment"
              className="h-10 min-w-[100px] flex-1 font-body text-base font-semibold text-mytext placeholder:font-body placeholder:text-sm placeholder:font-semibold placeholder:text-mytextlight"
            />
            <Button
              size={"lg"}
              className="grid place-content-center bg-gradient-to-br from-myaccent5 to-myaccent7"
            >
              <Send size={24} className="text-white" />
            </Button>
          </form>
        </div>
        <div className="w-full space-y-4">
          {/* map over and render a list of comments */}
          <Comment />
        </div>
        <p className="cursor-pointer font-body text-sm font-semibold text-mytext hover:underline">
          Show More
        </p>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

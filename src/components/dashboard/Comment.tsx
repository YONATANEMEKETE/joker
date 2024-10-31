import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Comment = () => {
  return (
    <div className="flex w-full items-start gap-x-4">
      <Avatar className="size-10 cursor-pointer">
        <AvatarFallback className="rounded-full bg-myaccent8 font-heading2 text-base font-semibold text-white">
          Y
        </AvatarFallback>
        <AvatarImage />
      </Avatar>
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-x-2">
          <p className="font-heading2 text-base font-semibold text-mytext">
            Belleck
          </p>
          <p className="font-body text-sm font-semibold text-mytextlight">
            12 hours ago
          </p>
        </div>
        <p className="font-body text-sm font-semibold text-mytextlight">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem amet cupiditate culpa dolore aliquam nesciunt
          aspernatur libero error, doloremque omnis voluptate explicabo ex
          quidem quae inventore earum atque, quaerat eius!
        </p>
      </div>
    </div>
  );
};

export default Comment;

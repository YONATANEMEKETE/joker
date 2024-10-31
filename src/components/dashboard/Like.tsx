import Image from "next/image";
import React from "react";
import heartlike from "../../../public/heart.png";
import heartliked from "../../../public/heartliked.png";

export const Liked = () => {
  return <Image src={heartliked} alt="liked" width={24} height={24} />;
};

// export const Like = () => {
//   return <Image src={heartlike} alt="like" width={24} height={24} />;
// };

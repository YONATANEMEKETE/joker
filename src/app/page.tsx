import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-blue bg-mybg2 grid h-screen place-content-center">
      <h1 className="text-mytext font-body text-3xl font-bold">
        what do you think
      </h1>
      <Button className="bg-myaccent5 w-[200px] font-bold text-white">
        Start
      </Button>
    </div>
  );
}

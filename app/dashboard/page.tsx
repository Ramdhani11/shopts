import { images } from "@/constant";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-full w-full center-content">
      <Image
        src={images.no_content}
        alt="no-content"
        width={250}
        height={250}
      />
    </div>
  );
};

export default page;

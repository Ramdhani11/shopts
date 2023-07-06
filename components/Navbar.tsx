"use client";

import Cookies from "js-cookie";
import React, { useState } from "react";
import { BsChevronDown, BsPersonCircle } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const [modal, setModal] = useState<boolean>(false);

  const router = useRouter();

  const modalHandler = () => {
    setModal(!modal);
  };

  const logoutHandler = () => {
    Cookies.remove("token");
    Cookies.remove("nama");
    router.replace("/");
  };

  return (
    <nav className="h-[10vh] w-[80vw] bg-white flex flex-row px-6 justify-between items-center border-b-[2px] border-borderColor">
      <h1 className="font-custom-medium">
        {path === "/dashboard" ? "Dashboard" : "Barang"}
      </h1>
      <div className=" relative flex flex-row items-center">
        <BsPersonCircle className="w-[25px] h-[25px] rounded-[50%] mr-2" />
        {/* <div className="w-[30px] h-[30px] rounded-[50%] bg-red-200 mr-2" /> */}
        <h2
          onClick={modalHandler}
          className="text-[13px] font-custom-medium mr-1 cursor-pointer"
        >
          super admin
        </h2>
        <BsChevronDown size={"15px"} />
        {modal ? (
          <div
            onClick={logoutHandler}
            className="cursor-pointer absolute bg-white flex w-full py-1 justify-center items-center top-[6vh] z-10"
          >
            <BiLogOut className="" size={"15px"} />
            <h2 className="text-[13px] font-custom-medium">Logout</h2>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;

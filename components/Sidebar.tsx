"use client";
import { dataSidebar } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const datasSidebar = dataSidebar;
  const path = usePathname();

  return (
    <div className="h-screen bg-white w-[20vw] p-5 border-r-[2px] border-borderColor">
      <h1 className="font-custom-bold text-primary mb-5">Shop</h1>
      <ul>
        {datasSidebar.map((data) => {
          const activePath = path === data.path;
          const activeIcon = activePath ? (
            <data.iconActive className="mr-2" />
          ) : (
            <data.icon className="mr-2" />
          );
          return (
            <li key={data.id}>
              <Link
                href={data.path}
                className={`flex flex-row font-custom-medium ${
                  activePath ? "bg-secondary text-primary" : null
                } hover:text-primary mb-2 p-2 items-center`}
              >
                {activeIcon} {data.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

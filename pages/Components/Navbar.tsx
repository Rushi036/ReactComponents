import Link from "next/link";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Buttons from "./Buttons";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 border-gray-200 dark:bg-gray-900 fixed w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
            Components
          </span>
        </a>
        <div className="flex space-x-3 -mr-20">
        <AccountCircleIcon className="w-8 h-8 text-white"/>
        <button className="text-white">Sign Out</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

import Link from "next/link";
// import HamburgerButton from './HamburgerMenuButton/HamburgerButton'

const Sidebar = () => {
  const [state, setState] = useState(true);
  const toggleState = () => {
    setState(!state);
    // console.log("------------", state);
  };

  const Footer = () => {
    return (
      <footer className="footer bg-white text-neutral-content  bottom-0 w-full fixed z-10">
        <div className="container mx-auto flex justify-between items-center h-16">
          <div
            className={`${state ? "mx-60" : ""} flex items-center text-black`}
          >
            <p className="mr-2 stroke-black">
              {" "}
              2023 - All Rights Reserved,{" "}
              <strong className="text-blue-500">Components</strong>
            </p>
          </div>
          <div className="flex gap-4 text-blue-600">
            <div>About Us</div>
            <div>Help</div>
            <div>Contact Us</div>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <>
      <div
        className={`${
          state ? "w-1/5" : "w-fit"
        } top-16 bottom-0 z-10  hidden shadow-2xl sm:block fixed  transition-all duration-300 bg-white border-r`}
      >
        <div
          className={`${
            !state && "rotate-180"
          }  absolute mr-1.5 text-xl bg-white fill-slate-800 rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={toggleState}
        >
          <BsArrowLeftCircle />
        </div>

        <ul className="space-y-1.5 pt-5">
          <li>
            <Link
              href="/page/Dashboard/Dashboard"
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm
             text-slate-700 rounded-md hover:bg-gray-100 dark:text-black
             "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className={`${!state && "hidden"} origin-left hover:block`}>
                Dashboard
              </span>
            </Link>
          </li>
          <li className="hs-accordion" id="users-accordion">
            <Link
              href="/Components/Buttons"
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm
              text-slate-700 rounded-md hover:bg-gray-100 dark:text-black
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              <span className={`${!state && "hidden"} origin-left hover:block`}>
                Buttons
              </span>
            </Link>
          </li>

          <li>
            {/* <Link
              href="/Components/SelectionButtons"
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm
              text-slate-700 rounded-md hover:bg-gray-100 dark:text-black
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <span className={`${!state && "hidden"} origin-left hover:block`}>
                Selection Buttons
              </span>
            </Link> */}
          </li>
          <li className="hs-accordion" id="account-accordion">
            <Link
              href="/Components/Dropdowns"
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm
             text-slate-700 rounded-md hover:bg-gray-100 dark:text-black
             "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
              <span className={`${!state && "hidden"} origin-left hover:block`}>
                Dropdowns
              </span>
            </Link>
          </li>
          {/* {role == "admin" && ( */}
          <li className="hs-accordion" id="projects-accordion">
            <Link
              href="/Components/Openable"
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm
      text-slate-700 rounded-md hover:bg-gray-100 dark:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className={`${!state && "hidden"} origin-left hover:block`}>
                Openable
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/Components/Inputs"
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm
             text-slate-700 rounded-md hover:bg-gray-100 dark:text-black
             "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                />
              </svg>
              <span className={`${!state && "hidden"} origin-left hover:block`}>
                Inputs
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/HolidayCalendar/holidayCalendarHR"
              // href="/HolidayCalendar/holidayCalendar"
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm
              text-slate-700 rounded-md hover:bg-gray-100 dark:text-black
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <span className={`${!state && "hidden"} origin-left hover:block`}>
                Holiday Calendar
              </span>
            </Link>
            <Link
              // href="/HolidayCalendar/holidayCalendarHR"
              href="/HolidayCalendar/holidayCalendar"
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm
              text-slate-700 rounded-md hover:bg-gray-100 dark:text-black
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <span className={`${!state && "hidden"} origin-left hover:block`}>
                Holiday Calendar
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/Policies/policiesHR"
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm
              text-slate-700 rounded-md hover:bg-gray-100 dark:text-black
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <span className={`${!state && "hidden"} origin-left hover:block`}>
                Policies
              </span>
            </Link>
            <Link
              href="/Policies/policies"
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm
              text-slate-700 rounded-md hover:bg-gray-100 dark:text-black
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <span className={`${!state && "hidden"} origin-left hover:block`}>
                Policies
              </span>
            </Link>
          </li>
          <li>
            <Link
              // href="/FAQs/FAQLayout"
              href="/FAQs/FAQHr"
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm
              text-slate-700 rounded-md hover:bg-gray-100 dark:text-black
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              <span className={`${!state && "hidden"} origin-left hover:block`}>
                FAQ
              </span>
            </Link>
            <Link
              href="/FAQs/FAQLayout"
              // href="/FAQs/FAQHr"
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm
            text-slate-700 rounded-md hover:bg-gray-100 dark:text-black
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              <span className={`${!state && "hidden"} origin-left hover:block`}>
                FAQ
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Sidebar;

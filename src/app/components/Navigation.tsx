"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  function clickHandler() {
    setIsOpen(false)
  }

  return (
    <nav className="h-24 border-b border-gray-300 flex items-center justify-between p-10 fixed w-[100%] z-10 bg-[#F4F4F4]">
      <div>
        <Link
          href="/"
          className="sm:text-5xl text-3xl font-bold ml-2 text-[#202426]"
        >
          M.Sarim <span className="text-[#FF5A13] ">.</span>
        </Link>
      </div>
      <div className="space-x-3 text-2xl font-[20px] lg:flex hidden">
        <Link
          href="/"
          className={`group relative ${
            pathName === "/" ? "border-b border-black" : ""
          }`}
        >
          Work
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="about"
          className={`group relative ${
            pathName === "/about" ? "border-b border-black" : ""
          }`}
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="contact"
          className={`group relative ${
            pathName === "/contact" ? "border-b border-black" : ""
          }`}
        >
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
      <div className="mx-1 space-x-6 items-center lg:flex hidden">
        <Link href="https://www.instagram.com/sarim_arain/" title="Instagram">
          <svg
            className="h-8 w-8 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/muhammad-sarim-arain-b3795a2ba/"
          title="LinkedIn"
        >
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </Link>
        <Link
          href="contact"
          className="relative inline-block w-48 text-center py-2 font-bold text-white bg-black border-2 h-12 border-black group overflow-hidden rounded-3xl"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            Let&apos;s Work Together
          </span>
          <span className="absolute inset-0 bg-white text-black transition-all duration-300 scale-y-0 group-hover:scale-y-100 origin-bottom"></span>
        </Link>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex items-center"
      >
        <div className="w-9 h-14 cursor-pointer flex flex-col items-center justify-center">
          <div
            className={`w-[50%] h-[2px] bg-[#202426] rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] ${
              isOpen ? "rotate-[-45deg]" : ""
            }`}
          ></div>
          <div
            className={`w-[50%] h-[2px] bg-[#202426] rounded-md transition-all duration-300 origin-center ${
              isOpen ? "hidden" : ""
            }`}
          ></div>
          <div
            className={`w-[50%] h-[2px] bg-[#202426] rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] ${
              isOpen ? "rotate-[45deg]" : ""
            }`}
          ></div>
        </div>
      </button>


      {isOpen && (
        <div className="flex flex-col justify-center items-center lg:hidden absolute top-24 left-0 w-full bg-[#fefefe] py-6 px-10 border-t border-gray-300 space-y-6 text-xl min-h-screen">
          <Link
          onClick={clickHandler}
            href="/"
            className={` ${
              pathName === "/" ? "text-black font-bold underline" : "text-gray-700"
            }`}
          >
            Work
          </Link>
          <Link
          onClick={clickHandler}
            href="about"
            className={` ${
              pathName === "/about" ? "text-black font-bold underline" : "text-gray-700"
            }`}
          >
            About
          </Link>
          <Link
          onClick={clickHandler}
            href="contact"
            className={` ${
              pathName === "/contact" ? "text-black font-bold underline" : "text-gray-700"
            }`}
          >
            Contact
          </Link>
          <div className="space-y-6">
            <div className="flex justify-center space-x-5">
            <Link
            onClick={clickHandler}
              href="https://www.instagram.com/sarim_arain/"
              title="Instagram"
              className="block"
            >
              <svg
            className="h-8 w-8 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
            </Link>
            <Link
            onClick={clickHandler}
              href="https://www.linkedin.com/in/muhammad-sarim-arain-b3795a2ba/"
              title="LinkedIn"
              className="block"
            >
              <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
            </Link>
            </div>
            <Link
            onClick={clickHandler}
              href="contact"
              className="block p-3 text-center py-2 font-bold text-white bg-black border-2 h-12 border-black group overflow-hidden rounded-3xl"
            >
              Let&apos;s Work Together
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;

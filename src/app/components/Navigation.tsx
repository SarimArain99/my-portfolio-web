"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  function clickHandler() {
    setIsOpen(false);
  }

  return (
    <nav className="h-24 border-b border-gray-300 flex items-center justify-between p-10 fixed w-[100%] z-10 bg-[#F4F4F4]">
      <div>
        <Link
          href="/"
          className="sm:text-5xl text-3xl font-bold ml-2 text-[#202426]"
        >
          M.Sarim<span className="text-[#FF5A13] ">.</span>
        </Link>
      </div>
      <div className="gap-x-5 text-2xl font-[20px] lg:flex hidden items-center">
        <Link
          href="/"
          className={`group relative flex items-center gap-x-1 ${
            pathName === "/" ? "border-b border-black " : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
          Work
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-1000 group-hover:w-full"></span>
        </Link>
        <Link
          href="/about"
          className={`group relative flex items-center gap-x-1 ${
            pathName === "/about" ? "border-b border-black" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          About
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/FAQs"
          className={`group relative flex items-center gap-x-1 ${
            pathName === "/FAQs" ? "border-b border-black" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
          FAQs
          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
      <div className="mx-1 gap-x-3 items-center lg:flex hidden">
        <Link href="https://www.instagram.com/sarim_arain/" title="Instagram">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="size-12"
          >
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
              cx="19.38"
              cy="42.035"
              r="44.899"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#fd5"></stop>
              <stop offset=".328" stop-color="#ff543f"></stop>
              <stop offset=".348" stop-color="#fc5245"></stop>
              <stop offset=".504" stop-color="#e64771"></stop>
              <stop offset=".643" stop-color="#d53e91"></stop>
              <stop offset=".761" stop-color="#cc39a4"></stop>
              <stop offset=".841" stop-color="#c837ab"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
              cx="11.786"
              cy="5.54"
              r="29.813"
              gradientTransform="matrix(1 0 0 .6663 0 1.849)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#4168c9"></stop>
              <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <path
              fill="#fff"
              d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
            ></path>
            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
            <path
              fill="#fff"
              d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
            ></path>
          </svg>
        </Link>
        <Link
          href="https://www.linkedin.com/in/muhammad-sarim-arain-b3795a2ba/"
          title="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="size-12"
          >
            <path
              fill="#0288D1"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path>
            <path
              fill="#FFF"
              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
            ></path>
          </svg>
        </Link>
        <Link
          href="/contact"
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
              pathName === "/"
                ? "text-black font-bold underline"
                : "text-gray-700"
            } flex items-center gap-x-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
            Work
          </Link>
          <Link
            onClick={clickHandler}
            href="about"
            className={` ${
              pathName === "/about"
                ? "text-black font-bold underline"
                : "text-gray-700"
            } flex items-center gap-x-1`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            About
          </Link>
          <Link
            onClick={clickHandler}
            href="FAQs"
            className={` ${
              pathName === "/contact"
                ? "text-black font-bold underline"
                : "text-gray-700"
            } flex items-center gap-x-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
            FAQs
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
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 64 64"
                  className="size-12"
                >
                  <radialGradient
                    id="TGwjmZMm2W~B4yrgup6jda_119026_gr1"
                    cx="32"
                    cy="32.5"
                    r="31.259"
                    gradientTransform="matrix(1 0 0 -1 0 64)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#efdcb1"></stop>
                    <stop offset="0" stop-color="#f2e0bb"></stop>
                    <stop offset=".011" stop-color="#f2e0bc"></stop>
                    <stop offset=".362" stop-color="#f9edd2"></stop>
                    <stop offset=".699" stop-color="#fef4df"></stop>
                    <stop offset="1" stop-color="#fff7e4"></stop>
                  </radialGradient>
                  <path
                    fill="url(#TGwjmZMm2W~B4yrgup6jda_119026_gr1)"
                    d="M58,54c-1.1,0-2-0.9-2-2s0.9-2,2-2h2.5c1.9,0,3.5-1.6,3.5-3.5S62.4,43,60.5,43H50c-1.4,0-2.5-1.1-2.5-2.5	S48.6,38,50,38h8c1.7,0,3-1.3,3-3s-1.3-3-3-3H42v-6h18c2.3,0,4.2-2,4-4.4c-0.2-2.1-2.1-3.6-4.2-3.6H58c-1.1,0-2-0.9-2-2s0.9-2,2-2	h0.4c1.3,0,2.5-0.9,2.6-2.2c0.2-1.5-1-2.8-2.5-2.8h-14C43.7,9,43,8.3,43,7.5S43.7,6,44.5,6h3.9c1.3,0,2.5-0.9,2.6-2.2	C51.1,2.3,50,1,48.5,1H15.6c-1.3,0-2.5,0.9-2.6,2.2C12.9,4.7,14,6,15.5,6H19c1.1,0,2,0.9,2,2s-0.9,2-2,2H6.2c-2.1,0-4,1.5-4.2,3.6	C1.8,16,3.7,18,6,18h2.5c1.9,0,3.5,1.6,3.5,3.5S10.4,25,8.5,25H5.2c-2.1,0-4,1.5-4.2,3.6C0.8,31,2.7,33,5,33h17v11H6	c-1.7,0-3,1.3-3,3s1.3,3,3,3l0,0c1.1,0,2,0.9,2,2s-0.9,2-2,2H4.2c-2.1,0-4,1.5-4.2,3.6C-0.2,60,1.7,62,4,62h53.8	c2.1,0,4-1.5,4.2-3.6C62.2,56,60.3,54,58,54z"
                  ></path>
                  <radialGradient
                    id="TGwjmZMm2W~B4yrgup6jdb_119026_gr2"
                    cx="18.51"
                    cy="66.293"
                    r="69.648"
                    gradientTransform="matrix(.6435 -.7654 .5056 .4251 -26.92 52.282)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".073" stop-color="#eacc7b"></stop>
                    <stop offset=".184" stop-color="#ecaa59"></stop>
                    <stop offset=".307" stop-color="#ef802e"></stop>
                    <stop offset=".358" stop-color="#ef6d3a"></stop>
                    <stop offset=".46" stop-color="#f04b50"></stop>
                    <stop offset=".516" stop-color="#f03e58"></stop>
                    <stop offset=".689" stop-color="#db359e"></stop>
                    <stop offset=".724" stop-color="#ce37a4"></stop>
                    <stop offset=".789" stop-color="#ac3cb4"></stop>
                    <stop offset=".877" stop-color="#7544cf"></stop>
                    <stop offset=".98" stop-color="#2b4ff2"></stop>
                  </radialGradient>
                  <path
                    fill="url(#TGwjmZMm2W~B4yrgup6jdb_119026_gr2)"
                    d="M45,57H19c-5.5,0-10-4.5-10-10V21c0-5.5,4.5-10,10-10h26c5.5,0,10,4.5,10,10v26C55,52.5,50.5,57,45,57z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M32,20c4.6,0,5.1,0,6.9,0.1c1.7,0.1,2.6,0.4,3.2,0.6c0.8,0.3,1.4,0.7,2,1.3c0.6,0.6,1,1.2,1.3,2 c0.2,0.6,0.5,1.5,0.6,3.2C46,28.9,46,29.4,46,34s0,5.1-0.1,6.9c-0.1,1.7-0.4,2.6-0.6,3.2c-0.3,0.8-0.7,1.4-1.3,2 c-0.6,0.6-1.2,1-2,1.3c-0.6,0.2-1.5,0.5-3.2,0.6C37.1,48,36.6,48,32,48s-5.1,0-6.9-0.1c-1.7-0.1-2.6-0.4-3.2-0.6 c-0.8-0.3-1.4-0.7-2-1.3c-0.6-0.6-1-1.2-1.3-2c-0.2-0.6-0.5-1.5-0.6-3.2C18,39.1,18,38.6,18,34s0-5.1,0.1-6.9 c0.1-1.7,0.4-2.6,0.6-3.2c0.3-0.8,0.7-1.4,1.3-2c0.6-0.6,1.2-1,2-1.3c0.6-0.2,1.5-0.5,3.2-0.6C26.9,20,27.4,20,32,20 M32,17 c-4.6,0-5.2,0-7,0.1c-1.8,0.1-3,0.4-4.1,0.8c-1.1,0.4-2.1,1-3,2s-1.5,1.9-2,3c-0.4,1.1-0.7,2.3-0.8,4.1C15,28.8,15,29.4,15,34 s0,5.2,0.1,7c0.1,1.8,0.4,3,0.8,4.1c0.4,1.1,1,2.1,2,3c0.9,0.9,1.9,1.5,3,2c1.1,0.4,2.3,0.7,4.1,0.8c1.8,0.1,2.4,0.1,7,0.1 s5.2,0,7-0.1c1.8-0.1,3-0.4,4.1-0.8c1.1-0.4,2.1-1,3-2c0.9-0.9,1.5-1.9,2-3c0.4-1.1,0.7-2.3,0.8-4.1c0.1-1.8,0.1-2.4,0.1-7 s0-5.2-0.1-7c-0.1-1.8-0.4-3-0.8-4.1c-0.4-1.1-1-2.1-2-3s-1.9-1.5-3-2c-1.1-0.4-2.3-0.7-4.1-0.8C37.2,17,36.6,17,32,17L32,17z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M32,25c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S37,25,32,25z M32,40c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S35.3,40,32,40 z"
                  ></path>
                  <circle cx="41" cy="25" r="2" fill="#fff"></circle>
                </svg>
              </Link>
              <Link
                onClick={clickHandler}
                href="https://www.linkedin.com/in/muhammad-sarim-arain-b3795a2ba/"
                title="LinkedIn"
                className="block"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 48 48"
                  className="size-12"
                >
                  <path
                    fill="#0288D1"
                    d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                  ></path>
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

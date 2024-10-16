function Skills() {
  const rightArror = (
    <svg
      className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );

  return (
    <div className="overflow-hidden lg:h-36 md:h-20 sm:h-18 h-16 bg-[#202426] sm:p-4 max-w-[100%] mx-auto mt-6 shadow-lg text-white text-center cursor-default">
      <p className="lg:text-lg md:text-sm sm:text-sm text-xs text-[#757575] sm:pt-1 pt-2">
        MY SKILLS
      </p>
      <div className="lg:text-3xl md:text-lg sm:text-sm text-xs font-semibold text-indigo-300 dark:text-white whitespace-nowrap animate-scroll flex justify-center items-center">
        &nbsp; &nbsp; <span className="mr-2">{rightArror}</span>NEXT.Js &nbsp;
        &nbsp; <span className="mr-2">{rightArror}</span>REACT.Js &nbsp;{" "}
        <span className="mr-2">{rightArror}</span>NODE.Js &nbsp;{" "}
        <span className="mr-2">{rightArror}</span>TAILWIND CSS &nbsp;{" "}
        <span className="mr-2">{rightArror}</span>TypeScript &nbsp;{" "}
        <span className="mr-2">{rightArror}</span>JavaScript &nbsp;{" "}
        <span className="mr-2">{rightArror}</span>CSS &nbsp;{" "}
        <span className="mr-2">{rightArror}</span>HTML
      </div>
    </div>
  );
}

export default Skills;

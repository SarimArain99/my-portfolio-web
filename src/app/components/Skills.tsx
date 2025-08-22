import Image from "next/image";

function Skills() {
  const skills = [
    { name: "Tailwind CSS", img: "/tailwind.png" },
    { name: "NODE.JS", img: "/node.png" },
    { name: "NEXT.JS", img: "/next.png" },
    { name: "REACT.JS", img: "/react.png" },
    { name: "PYTHON", img: "/python.png" },
    { name: "TypeScript", img: "/ts.png" },
    { name: "JavaScript", img: "/js.png" },
    { name: "CSS", img: "/css.png" },
    { name: "HTML", img: "/html.png" },
  ];

  return (
    <div className="overflow-hidden h-auto bg-[#202426] sm:p-4 max-w-[100%] mx-auto my-6 shadow-lg text-white text-center cursor-default">
      <p className="lg:text-lg md:text-sm sm:text-sm text-xs text-[#757575] sm:pt-1 pt-2">
        MY SKILLS
      </p>
      <div className="lg:text-3xl md:text-lg sm:text-sm text-xs font-semibold text-indigo-300 dark:text-white whitespace-nowrap animate-scroll flex justify-center items-center space-x-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center py-2">
            <Image
              width={1000}
              height={1000}
              src={skill.img}
              alt={skill.name}
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 mb-2 object-contain"
            />
            <div className="text-center text-xs sm:text-sm md:text-base lg:text-lg">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

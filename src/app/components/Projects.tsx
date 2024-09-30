import Image from "next/image";
import country from "../public/images/Country.png";
import DResume from "../public/images/Dynamic Resume.png";
import SResume from "../public/images/Static Resume.png";
import IMS from "../public/images/IMS.png";
import Link from "next/link";
function Projects() {
  return (
    <>
      <p className="text-[#9e9e9e] text-center font-bold text-sm">
        FEATURED PROJECTS
      </p>
      <div className="grid sm:grid-cols-2 grid-cols-1 px-[11vw] gap-10 text-xl py-5">
        <div className="border-b border-gray-500 overflow-hidden">
          <Link href="https://main--world-countries-project.netlify.app/">
            <Image
              src={country}
              width={500}
              height={100}
              alt="country's Details"
              className="inline-block shadow-md shadow-gray-400 mb-2 hover:scale-105 duration-500"
            />
            <p>Detail About Countries</p>
          </Link>
        </div>
        <div className="border-b border-gray-500 overflow-hidden">
          <Link href="https://my-dynamic-resume.vercel.app/">
            <Image
              src={DResume}
              width={500}
              height={100}
              alt="country's Details"
              className="inline-block shadow-md shadow-gray-400 mb-2 hover:scale-105 duration-500"
            />
            <p>Generate Resume Dynamically</p>
          </Link>
        </div>
        <div className="border-b border-gray-500 overflow-hidden">
          <Link href="https://my-static-resume.vercel.app/">
            <Image
              src={SResume}
              width={500}
              height={100}
              alt="country's Details"
              className="inline-block shadow-md shadow-gray-400 mb-2 hover:scale-105 duration-500"
            />
            <p>My Resume</p>
          </Link>
        </div>
        <div className="border-b border-gray-500 overflow-hidden">
          <Link href="https://inventory-management-system-proj.netlify.app/">
            <Image
              src={IMS}
              width={500}
              height={100}
              alt="Inventory Management System"
              className="inline-block shadow-md shadow-gray-400 mb-2 hover:scale-105 duration-500"
            />
            <p>Inventory Management System</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;

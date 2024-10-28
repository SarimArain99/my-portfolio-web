import Image from "next/image";
import country from "../public/images/Country.png";
import DResume from "../public/images/Dynamic Resume.png";
import SResume from "../public/images/Static Resume.png";
import IMS from "../public/images/IMS.png";
import Link from "next/link";
function Projects() {
  return (
    <>
      <div className="sm:pt-12 pt-5 bg-[#F4F4F4]">
        <p className="text-[#9e9e9e] text-center font-bold text-sm tracking-wide">
          FEATURED PROJECTS
        </p>

        <div className="grid sm:grid-cols-2 grid-cols-1 px-[11vw] gap-10 pt-10">
          <div className="group border-b border-gray-300 overflow-hidden transition duration-300 ease-in-out hover:border-blue-600">
            <Link href="/staticResume">
              <Image
                src={SResume}
                width={500}
                height={300}
                alt="Static Resume"
                className="inline-block shadow-md shadow-gray-400 mb-3 rounded-lg group-hover:scale-105 transition duration-500 ease-in-out"
              />
              <p className="text-center font-semibold text-gray-700 group-hover:text-blue-600 transition duration-300">
                My Resume
              </p>
            </Link>
          </div>

          <div className="group border-b border-gray-300 overflow-hidden transition duration-300 ease-in-out hover:border-blue-600">
            <Link href="/dynamicResume">
              <Image
                src={DResume}
                width={500}
                height={300}
                alt="Dynamic Resume"
                className="inline-block shadow-md shadow-gray-400 mb-3 rounded-lg group-hover:scale-105 transition duration-500 ease-in-out"
              />
              <p className="text-center font-semibold text-gray-700 group-hover:text-blue-600 transition duration-300">
                Generate Resume Dynamically
              </p>
            </Link>
          </div>

          <div className="group border-b border-gray-300 overflow-hidden transition duration-300 ease-in-out hover:border-blue-600">
            <Link href="/countriesDetails">
              <Image
                src={country}
                width={500}
                height={300}
                alt="Country Details"
                className="inline-block shadow-md shadow-gray-400 mb-3 rounded-lg group-hover:scale-105 transition duration-500 ease-in-out"
              />
              <p className="text-center font-semibold text-gray-700 group-hover:text-blue-600 transition duration-300">
                Detail About Countries
              </p>
            </Link>
          </div>

          {/* Project 2 */}

          <div className="group border-b border-gray-300 overflow-hidden transition duration-300 ease-in-out hover:border-blue-600">
            <Link href="/IMS">
              <Image
                src={IMS}
                width={500}
                height={300}
                alt="Inventory Management System"
                className="inline-block shadow-md shadow-gray-400 mb-3 rounded-lg group-hover:scale-105 transition duration-500 ease-in-out"
              />
              <p className="text-center font-semibold text-gray-700 group-hover:text-blue-600 transition duration-300">
                Inventory Management System
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

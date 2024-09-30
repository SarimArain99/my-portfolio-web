import Link from "next/link";
import country from "../public/images/Country.png";
import Image from "next/image";
function countriesDetails() {
  return (
    <div className="flex justify-center">
    <div className="sm:mx-8 mx-2 py-10 max-w-3xl relative top-28 bg-white shadow-2xl rounded-2xl overflow-hidden mb-20">
      <Image
        src={country}
        alt="Country Details"
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-contain rounded-t-lg border-b border-gray-200"
      />
      <div className="px-4 sm:px-6 py-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 text-center text-gray-800 tracking-wide">
          Country Details Project Overview
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
          This project provides a detailed overview of countries, offering a
          wealth of information such as:
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-gray-800">
              Regions & Subregions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Discover countries categorized into major regions like Africa,
              Asia, and Europe, and subregions like Northern Europe.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-gray-800">
              Capitals
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Each country&apos;s capital is highlighted for quick reference.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-gray-800">
              Currencies & Symbols
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Information about official currencies and their symbols (e.g.,
              USD, EUR) for financial insights.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-gray-800">
              Flags
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Visual depictions of national flags for an educational,
              geographical perspective.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 text-gray-800">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-3 leading-relaxed">
              <li>
                <strong>Search & Filter:</strong> Easily search and filter
                countries by name or region.
              </li>
              <li>
                <strong>Responsive Design:</strong> Fully optimized for devices
                of all sizes, providing a smooth user experience.
              </li>
              <li>
                <strong>API Integration:</strong> Fetches up-to-date data
                through the REST Countries API for accurate information.
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed">
          Designed for students, travelers, and educators, this project presents
          country data in a modern, intuitive interface.
        </p>

        <Link
          href="https://main--world-countries-project.netlify.app/"
          className="mt-6 block w-max mx-auto text-xl xl:text-2xl text-blue-600 font-bold hover:text-blue-800 transition duration-300 ease-in-out"
        >
          Explore the Project
        </Link>
      </div>
    </div>
    </div>
  );
}

export default countriesDetails;

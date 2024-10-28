import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="flex justify-center mx-3">
      <div className="mt-12 overflow-hidden">
        <Image
          src="/DResume.png"
          alt="Dynamic Resume Generator"
          className="w-full object-contain rounded-t-lg mt-14"
          width={1000}
          height={1000}
        />
        <div className="px-6 py-8 xl:px-12 xl:py-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 sm: mt-10 text-center text-gray-800 tracking-wide">
            Dynamic Resume Generator Overview
          </h1>
          <p className="text-lg xl:text-xl mb-6 text-gray-700 leading-relaxed">
            This project provides users with a convenient tool to dynamically
            generate and download resumes tailored to their personal and
            professional information.
          </p>

          <div className="space-y-6 xl:space-y-8">
            <div>
              <h2 className="text-2xl xl:text-3xl font-semibold mb-3 text-gray-800">
                Customizable Fields
              </h2>
              <p className="text-gray-600 leading-relaxed xl:leading-loose">
                Users can easily input details such as name, education, work
                experience, and skills to personalize their resume.
              </p>
            </div>

            <div>
              <h2 className="text-2xl xl:text-3xl font-semibold mb-3 text-gray-800">
                Professional Templates
              </h2>
              <p className="text-gray-600 leading-relaxed xl:leading-loose">
                The generator offers multiple professional templates, ensuring a
                polished and visually appealing layout.
              </p>
            </div>

            <div>
              <h2 className="text-2xl xl:text-3xl font-semibold mb-3 text-gray-800">
                Instant Preview & Download
              </h2>
              <p className="text-gray-600 leading-relaxed xl:leading-loose">
                Preview the resume instantly and download it in PDF format with
                a single click.
              </p>
            </div>

            <div>
              <h2 className="text-2xl xl:text-3xl font-semibold mb-3 text-gray-800">
                Key Features
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-3 xl:space-y-4 leading-relaxed">
                <li>
                  <strong>User-Friendly Interface:</strong> Easy-to-use form
                  fields for fast input and customization.
                </li>
                <li>
                  <strong>Real-Time Preview:</strong> See the changes as you
                  input information into the resume.
                </li>
                <li>
                  <strong>Downloadable PDF:</strong> Instantly download your
                  personalized resume in PDF format.
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-lg xl:text-xl text-gray-800 leading-relaxed">
            Perfect for job seekers and professionals, this tool streamlines the
            process of creating a professional resume with minimal effort.
          </p>

          <Link
            href="https://my-dynamic-resume.vercel.app/"
            className="mt-6 block w-max mx-auto text-xl xl:text-2xl text-blue-600 font-bold hover:text-blue-800 transition duration-300 ease-in-out"
          >
            Explore the Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;

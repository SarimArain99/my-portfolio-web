import Image from "next/image";
import Link from "next/link";
import SResume from "../public/images/Static Resume.png"
function page() {
    return (
        <div className="sm:mx-8 mx-2 py-10 max-w-3xl xl:max-w-5xl relative top-28 bg-white shadow-2xl rounded-2xl overflow-hidden mb-20">
  <Image
    src={SResume}
    alt="Static Resume"
    className="w-full h-64 xl:h-80 object-cover rounded-t-lg border-b border-gray-200"
  />
  <div className="px-6 py-8 xl:px-12 xl:py-10">
    <h1 className="text-4xl xl:text-5xl font-extrabold mb-6 text-center text-gray-800 tracking-wide">
      My Static Resume Overview
    </h1>
    <p className="text-lg xl:text-xl mb-6 text-gray-700 leading-relaxed">
      This project showcases a static version of my personal resume, providing a simple and direct way to present professional information.
    </p>

    <div className="space-y-6 xl:space-y-8">
      <div>
        <h2 className="text-2xl xl:text-3xl font-semibold mb-3 text-gray-800">
          Personal Information
        </h2>
        <p className="text-gray-600 leading-relaxed xl:leading-loose">
          The resume displays key personal details, including name, contact information, and a professional summary.
        </p>
      </div>

      <div>
        <h2 className="text-2xl xl:text-3xl font-semibold mb-3 text-gray-800">
          Education & Experience
        </h2>
        <p className="text-gray-600 leading-relaxed xl:leading-loose">
          It highlights my educational background and professional experience, structured clearly for potential employers.
        </p>
      </div>

      <div>
        <h2 className="text-2xl xl:text-3xl font-semibold mb-3 text-gray-800">
          Skills & Certifications
        </h2>
        <p className="text-gray-600 leading-relaxed xl:leading-loose">
          A section dedicated to my technical skills, certifications, and key competencies relevant to my career.
        </p>
      </div>

      <div>
        <h2 className="text-2xl xl:text-3xl font-semibold mb-3 text-gray-800">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-3 xl:space-y-4 leading-relaxed">
          <li>
            <strong>Concise Layout:</strong> A simple, no-frills design focusing on essential information.
          </li>
          <li>
            <strong>Responsive Design:</strong> The static resume is fully optimized for mobile and desktop screens.
          </li>
          <li>
            <strong>Easy Navigation:</strong> The layout ensures easy readability and straightforward navigation.
          </li>
        </ul>
      </div>
    </div>

    <p className="mt-8 text-lg xl:text-xl text-gray-800 leading-relaxed">
      This static resume offers a clean and effective way to present my qualifications and experiences to employers.
    </p>

    <Link
      href="https://my-static-resume.vercel.app/"
      className="mt-6 block w-max mx-auto text-xl xl:text-2xl text-blue-600 font-bold hover:text-blue-800 transition duration-300 ease-in-out"
    >
      View the Resume
    </Link>
  </div>
</div>

    );
}

export default page;
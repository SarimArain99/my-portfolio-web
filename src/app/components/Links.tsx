import Link from "next/link";

function Links() {
  return (
    <div className="flex px-10 py-8 gap-x-20 justify-center">
      <div className="flex flex-col text-center">
        <p className="text-gray-500 text-lg font-medium mb-3">Pages</p>
        <div>
          <Link href="/" className="relative group">
            <span className="text-lg font-semibold text-black group-hover:text-blue-600 transition duration-300">
              Work
            </span>
            <div className="w-full h-[2px] bg-black group-hover:bg-blue-600 mt-1 transition-all duration-300"></div>
          </Link>
          <Link href="/about" className="relative group">
            <span className="text-lg font-semibold text-black group-hover:text-blue-600 transition duration-300">
              About
            </span>
            <div className="w-full h-[2px] bg-black group-hover:bg-blue-600 mt-1 transition-all duration-300"></div>
          </Link>
          <Link href="/FAQs" className="relative group">
            <span className="text-lg font-semibold text-black group-hover:text-blue-600 transition duration-300">
              FAQs
            </span>
            <div className="w-full h-[2px] bg-black group-hover:bg-blue-600 mt-1 transition-all duration-300"></div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col text-left">
        <p className="text-gray-500 text-lg font-medium mb-3">Find Me At</p>
        <div>
          {[
            {
              name: "Instagram",
              link: "https://www.instagram.com/sarim_arain/",
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/muhammad-sarim-arain-b3795a2ba/",
            },
            {
              name: "Facebook",
              link: "https://www.facebook.com/share/or24DEigkHwRGxSD/?mibextid=qi2Omg",
            },
            { name: "GitHub", link: "https://github.com/SarimArain99/" },
          ].map((item) => (
            <span key={item.name} className="relative group">
              ↗{" "}
              <Link
                href={item.link}
                className="text-lg font-semibold text-black group-hover:text-blue-600 transition duration-300"
              >
                {item.name}
              </Link>
              <div className="w-full h-[2px] bg-black group-hover:bg-blue-600 ml-5 mt-1 transition-all duration-300"></div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Links;

import Link from "next/link";

function Links() {
  return (
    <div className="flex px-10 py-5 gap-x-10">
      <span className="flex flex-col text-center">
        <p className="text-[#757575] mb-5">Pages</p>
        <Link href="/about">
          Work
          <div className="w-22 h-[1px] bg-black mx-1"></div>
        </Link>
        <Link href="/contact">
          Connect
          <div className="w-22 h-[1px] bg-black"></div>
        </Link>
      </span>
      <div className="flex flex-col">
        <p className="text-[#757575] mb-5">FIND ME AT</p>
        <span>
          ↗ <Link href="https://www.instagram.com/sarim_arain/">Instagram</Link>
          <div className="w-22 h-[1px] bg-black ml-3"></div>
        </span>
        <span>
          ↗ <Link href="https://www.linkedin.com/in/muhammad-sarim-arain-b3795a2ba/">LinkedIn</Link>
          <div className="w-22 h-[1px] bg-black ml-3"></div>
        </span>
        <span>
          ↗ <Link href="https://www.facebook.com/share/or24DEigkHwRGxSD/?mibextid=qi2Omg ">FaceBook</Link>
          <div className="w-22 h-[1px] bg-black ml-3"></div>
        </span>
        <span>
          ↗ <Link href="https://github.com/SarimArain99/">GitHub</Link>
          <div className="w-22 h-[1px] bg-black ml-3"></div>
        </span>
      </div>
    </div>
  );
}

export default Links;

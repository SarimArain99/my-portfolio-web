import Image from "next/image";
import sa from "../public/sa.jpg";
import sarim2 from "../public/sarim2.jpg";
import sarim3 from "../public/sarim3.jpg";
import Skills from "../components/Skills";
function About() {
  return (
    <div className="py-24">
      <div className="h-40 bg-gradient-to-r from-[#1a1d1f] to-[#202426] text-white text-center lg:text-3xl md:text-2xl sm:text-lg text-base py-8 md:px-28 sm:px-4 font-serif leading-relaxed shadow-lg">
        I&apos;m a professional Front-End Developer with expertise in HTML, CSS,
        JavaScript, TypeScript, Tailwind CSS, Node.js, React.js, and Next.js.
      </div>

      <div className="flex py-9 items-center justify-center">
        <div className="flex py-10 items-center justify-center relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden relative -z-30 -mr-10 border border-gray-400">
            <Image src={sa} alt="Sarim" className="object-bottom" />
          </div>
          <div className="w-40 h-40 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden relative -z-20 border border-gray-400">
            <Image src={sarim3} alt="Sarim" className="object-cover" />
          </div>
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden relative -z-30 -ml-10 border border-gray-400">
            <Image src={sarim2} alt="Sarim" className="object-cover" />
          </div>
        </div>
      </div>

      <p className="lg:text-xl md:text-lg sm:text-base text-sm text-center lg:px-48 md:px-32 sm:px-16 px-8 font-semibold leading-relaxed py-10">
        I&apos;m a passionate front-end developer, skilled in building responsive and
        dynamic user interfaces. I specialize in crafting seamless user
        experiences using technologies like React, Next.js, and Tailwind CSS.
        With a focus on clean code and performance optimization, I bring designs
        to life and ensure that applications are both functional and visually
        appealing.
      </p>
      <Skills />
    </div>
  );
}

export default About;

import Image from "next/image";
import Skills from "../components/Skills";
function About() {
  return (
    <div className="pt-24">
      <div className="h-40 bg-gradient-to-r from-[#1a1d1f] to-[#202426] text-white text-center lg:text-3xl md:text-2xl sm:text-lg text-base py-8 md:px-28 sm:px-4 font-serif leading-relaxed shadow-lg">
        I&apos;m a professional Front-End Developer with expertise in HTML, CSS,
        JavaScript, TypeScript, Tailwind CSS, Node.js, React.js, and Next.js.
      </div>

      <div className="flex py-9 items-center justify-center">
        <div className="flex py-10 items-center justify-center relative">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden relative -z-30 sm:-mr-10 -mr-5 border border-gray-400">
            <Image
              src="/sa.jpg"
              alt="Sarim"
              className="object-center"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-40 h-40 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden relative -z-20 border border-gray-400">
            <Image
              src="/sarim3.jpg"
              alt="Sarim"
              className="object-cover"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden relative -z-30 sm:-ml-10 -ml-5 border border-gray-400">
            <Image
              src="/sarim2.jpg"
              alt="Sarim"
              className="object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
      <p className="lg:text-xl md:text-lg sm:text-base text-sm text-center lg:px-48 md:px-32 sm:px-16 px-8 font-semibold leading-relaxed">
        I&apos;m a passionate front-end developer, skilled in building
        responsive and dynamic user interfaces. I specialize in crafting
        seamless user experiences using technologies like React, Next.js, and
        Tailwind CSS. With a focus on clean code and performance optimization, I
        bring designs to life and ensure that applications are both functional
        and visually appealing.
      </p>
      <p className="lg:text-xl md:text-lg sm:text-base text-sm text-center lg:px-48 md:px-32 sm:px-16 px-8 font-medium leading-relaxed pt-10">
        Driven by a passion for technology and creativity, I aim to deliver
        intuitive and engaging web experiences. My hobbies include exploring new
        frameworks, and constantly challenging myself to learn and grow.
      </p>
      <Skills />
      <p className="lg:text-xl md:text-lg sm:text-base text-sm text-center lg:px-48 md:px-32 sm:px-16 px-8 font-medium leading-relaxed py-5">
        Certified in <strong>Freelancing</strong> under
        <strong> DigiSkills</strong> and currently pursuing
        <strong> Cloud Applied Generative AI Engineering</strong> under
        <strong> GIAIC</strong>. I have developed a variety of projects,
        including my personal portfolio website, portfolio websites for others,
        blogging platforms, website clones, e-commerce platforms, and more.
      </p>

      <div className="text-center py-10 px-6 mx-10  p-6">
        <p className="text-2xl sm:text-3xl font-serif italic leading-relaxed text-[#202426]">
          <span className="text-5xl font-extrabold text-gray-400">“</span>
          Programming isn&apos;t about what you know; it&apos;s about what you can figure
          out.
          <span className="text-5xl font-extrabold text-gray-400">”</span>
        </p>
        <p className="mt-6 text-base text-gray-500 font-medium">- Chris Pine</p>
      </div>
    </div>
  );
}

export default About;

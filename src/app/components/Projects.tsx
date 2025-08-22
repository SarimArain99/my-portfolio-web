"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface projects {
  image: string;
  title: string;
  description: string;
  githubLink: string;
  hostedLink: string;
}

const projects: projects[] = [
  {
    image: "/portfolio.png",
    title: "My Personal Portfolio Website",
    description:
      "This website serves as a digital representation of my professional journey, showcasing my skills, accomplishments, and projects. It is thoughtfully designed to provide a seamless user experience, with sections that highlight my expertise in front-end development, a dedicated portfolio gallery, testimonials, and contact forms. Built with responsive design principles, it ensures accessibility and elegance across devices, making it an essential tool for networking and client engagement.",
    githubLink: "https://github.com/SarimArain99/my-portfolio-web.git",
    hostedLink: "https://portfoliosarim.vercel.app/",
  },
  {
    image: "/fashionfinds.png",
    title: "Fashion Finds E-Commerce Platform",
    description:
      "A modern e-commerce platform designed to provide a seamless shopping experience for users. It features a user-friendly interface, product categories, filters, and a secure checkout process. This project showcases my ability to create dynamic web applications with a focus on functionality, aesthetics, and user engagement.",
    githubLink: "https://github.com/SarimArain99/fashion-finds.git",
    hostedLink: "https://fashion-finds-store.vercel.app/",
  },
  {
    image: "/hekto.png",
    title: "Hekto E-Commerce Website (Complete UI Clone)",
    description:
      "A comprehensive UI clone of Hekto's e-commerce website, designed to reflect its stylish and responsive user interface. This project showcases my ability to recreate complex layouts, incorporate product categories and filters, and deliver an engaging online shopping experience.",
    githubLink: "https://github.com/SarimArain99/Q2-hackathon.git",
    hostedLink: "https://hekto-furniture-store.vercel.app/",
  },
  {
    image: "/codeAndBeyond.png",
    title: "Code and Beyond",
    description:
      "An engaging blog platform tailored for tech enthusiasts, developers, and learners. This website features a modern layout with categories for articles, tutorials, and news. It includes dynamic content rendering, search functionality, and an intuitive design that makes browsing articles a delightful experience. This project showcases my expertise in creating content-driven web solutions with a strong focus on user engagement.",
    githubLink: "https://github.com/SarimArain99/Code-and-Beyond.git",
    hostedLink: "https://code-and-beyond.vercel.app/",
  },
  {
    image: "/borcelle.png",
    title: "Borcelle Car Rental",
    description:
      "A comprehensive car rental platform built to streamline the booking process for users. It features an intuitive navigation system, detailed car listings with filters for preferences like model and price range, and a sleek UI designed to deliver an unparalleled user experience. This project highlights my ability to merge functionality with aesthetics, making it a robust and user-friendly solution for the car rental industry.",
    githubLink: "https://github.com/SarimArain99/BORCELLE-CAR-RENTAL.git",
    hostedLink: "https://borcelle-car-rental.vercel.app/",
  },
  {
    image: "/Country.png",
    title: "Explore the World",
    description:
      "An interactive web application that allows users to explore countries, view details like population, region, and flag, and even compare countries side by side. This project showcases my ability to work with APIs, display dynamic content, and provide a seamless user experience for users to explore the world around them.",
    githubLink: "https://github.com/SarimArain99/countries-Details.git",
    hostedLink: "https://world-countries-project.netlify.app/",
  },
  {
    image: "/IMS.png",
    title: "Inventory Management System",
    description:
      "A comprehensive inventory management system designed to streamline the management of products. This application includes features such as adding, editing, deleting, sorting, and filtering items, with a smooth user interface for managing inventory effectively. It is an excellent example of my ability to build functional and user-friendly systems.",
    githubLink: "https://github.com/SarimArain99/Imventory-Management-Sys.git",
    hostedLink: "https://inventory-management-system-proj.netlify.app/",
  },
  {
    image: "/rifzan.png",
    title: "Rifzan Portfolio Website",
    description:
      "A bespoke portfolio website created for Rifzan, designed to beautifully showcase his professional journey. The design emphasizes visually captivating sections, interactive elements, and a seamless flow that highlights projects and achievements effectively. It serves as a testament to my ability to deliver personalized and impactful web solutions.",
    githubLink: "https://github.com/SarimArain99/rifzan-landing-page.git",
    hostedLink: "https://rifzan-landing-page.vercel.app/",
  },
  
  {
    image: "/dynamicResume.png",
    title: "Dynamic Resume Generator",
    description:
      "An innovative application designed to empower users to create professional resumes effortlessly. It allows users to input their details, preview their resume dynamically, and download the final version. The application features a clean and user-friendly interface, with options for customization, ensuring a personalized touch to every resume.",
    githubLink: "https://github.com/SarimArain99/Hackathon_Milstone.git",
    hostedLink: "https://my-dynamic-resume.vercel.app/",
  },
  {
    image: "/staticResume.png",
    title: "My Resume",
    description:
      "A personal resume meticulously designed to showcase my professional journey in a clear and visually engaging format. This project demonstrates my ability to present content in an organized manner, with sections for skills, education, work experience, and projects. The design prioritizes readability and aesthetics, ensuring a positive impression on potential employers and collaborators.",
    githubLink: "https://github.com/SarimArain99/Hackathon_Milstone.git",
    hostedLink: "https://my-static-resume.vercel.app/",
  },
  {
    image: "/whitespace.png",
    title: "Whitespace (Front Page Clone)",
    description:
      "A pixel-perfect clone of Whitespace's front page that highlights minimalistic design principles. The project focuses on utilizing whitespace effectively to enhance content readability and overall aesthetics. By recreating this modern interface, I demonstrate my attention to detail and understanding of design principles that prioritize simplicity and elegance.",
    githubLink: "https://github.com/SarimArain99/white-space.git",
    hostedLink: "https://white-space-ten.vercel.app/",
  },
  {
    image: "/GIAIC.png",
    title: "Governor Initiative Website Clone",
    description:
      "A meticulously crafted clone of the Governor Initiative website that captures the essence of government initiatives and public outreach. This project demonstrates my ability to create structured layouts, implement visually engaging graphics, and ensure information hierarchy.",
    githubLink:
      "https://github.com/SarimArain99/Governor-Initiative-Web-Clone.git",
    hostedLink: "https://governor-initiative-web-clone.vercel.app/",
  },
  {
    image: "/landingPage.png",
    title: "A Landing Page Clone",
    description:
      "This project showcases my ability to replicate a modern landing page with precision and attention to detail. The design incorporates captivating animations, bold typography, and strategically placed elements to drive user interaction and conversions. It highlights an aesthetically pleasing layout with responsive features, ensuring optimal performance on all screen sizes.",
    githubLink:
      "https://github.com/SarimArain99/landing-page-class-assignment.git",
    hostedLink: "https://1-landing-page.vercel.app/",
  },

  {
    image: "/pakWheels.png",
    title: "PakWheels (Landing Page Clone)",
    description:
      "A detailed recreation of PakWheels' landing page, focusing on high-quality visuals, structured content layout, and user-friendly design. This project highlights my ability to work with complex UI designs and deliver a polished product that mirrors the original experience.",
    githubLink: "https://github.com/SarimArain99/PakWheels.git",
    hostedLink: "https://pak-wheels-sable.vercel.app/",
  },
  {
    image: "/counter.png",
    title: "Counter",
    description:
      "A lightweight application designed for quick and efficient numeric tracking. This project features functionality for incrementing, decrementing, and resetting counters. It highlights my understanding of state management and the ability to create intuitive user interfaces for simple tasks.",
    githubLink: "https://github.com/SarimArain99/Counter.git",
    hostedLink: "https://counter-peach-two.vercel.app/",
  },
];

function Projects() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="relative px-2 sm:px-10 cursor-default">
      <div className="flex flex-col items-center justify-center py-10 px-5 gap-4 ">
        <h1 className="text-2xl md:text-4xl font-bold text-[#202426] tracking-wide">
          Featured Projects
        </h1>
        <p className="text-gray-700 text-sm text-center max-w-lg">
          A collection of projects I&apos;ve worked on, showcasing my skills and
          creativity in building functional and visually appealing solutions.
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#F1F4F9] rounded-3xl overflow-hidden shadow-xl shadow-gray-600 hover:scale-95 duration-500 "
          >
            <div
              className="w-full h-56 bg-gray-300 flex justify-center items-center cursor-pointer "
              onClick={() => handleImageClick(project.image)}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                width={1000}
                height={1000}
              />
            </div>

            <div className="p-4 flex flex-col justify-between h-40">
              <h2 className="text-xl font-bold text-[#202426] mb-2 truncate text-center">
                {project.title}
              </h2>
              <p className="text-sm text-[#4d4c4e] line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="flex justify-between items-center p-5">
              <Link
                href={project.hostedLink}
                target="_blank"
                className="text-[#202426] hover:text-white hover:bg-[#202426] p-2 rounded-xl duration-500 transition-colors"
              >
                <svg
                  className="h-10 w-10"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="3.6" y1="9" x2="20.4" y2="9" />
                  <line x1="3.6" y1="15" x2="20.4" y2="15" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
              </Link>
              <Link
                href={project.githubLink}
                target="_blank"
                className="text-[#202426] hover:text-white hover:bg-[#202426] p-2 rounded-xl duration-500 transition-colors"
              >
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center sm:py-10 ">
        <p className="text-lg sm:text-xl md:text-4xl font-medium text-center animate-pulse text-[#202426]">
          More Projects are Coming Soon!&#9829;
        </p>
      </div>

      {isPopupOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleClosePopup}
        >
          <Image
            src={selectedImage}
            alt="Selected Project"
            className="max-w-full max-h-full object-contain"
            width={1000}
            height={1000}
          />
        </div>
      )}
    </div>
  );
}
export default Projects;

"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "WebCentar",
    description:
      "Web design agency website built with WordPress and Elementor plugin",
    image: "/images/projects/1.png",
    url: "https://webcentar.ba",
    type: "Web",
  },
  {
    id: 2,
    title: "E-Books",
    description:
      "Mobile application for publishing and reading books built with C# .NET and Flutter",
    image: "/images/projects/2.png",
    url: "https://github.com/ikbalcaus/e-books",
    type: "Mobile",
  },
  {
    id: 3,
    title: "QSD2024 Web Shop",
    description:
      "E-commerce web shop for selling clothes (PHP Laravel, React.js, MySQL)",
    image: "/images/projects/3.png",
    url: "https://github.com/ikbalcaus/qsd-webshop-client",
    type: "Web",
  },
  {
    id: 4,
    title: "HandSketch",
    description:
      "Drawing on Canvas with Hand Gestures + AI for Letter Recognition",
    image: "/images/projects/4.png",
    url: "https://github.com/ikbalcaus/HandSketch",
    type: "Desktop",
  },
  {
    id: 5,
    title: "BaseCure",
    description: "Medical application built with C# .NET and Angular",
    image: "/images/projects/5.png",
    url: "https://github.com/ikbalcaus/BaseCure",
    type: "Web",
  },
  {
    id: 6,
    title: "Client's Websites",
    description: "Custom websites built for clients with WordPress",
    image: "/images/projects/6.png",
    url: "https://webcentar.ba/projekti",
    type: "Web",
  },
];

export default function () {
  const [selectedType, setSelectedType] = useState("All");

  return (
    <section id="projects" className="pt-16 xl:pt-20">
      <h2 className="text-center text-4xl font-bold text-white mb-4 xl:mb-6">
        My Projects
      </h2>
      <div className="flex flex-col px-8 sm:px-0 sm:flex-row justify-center mb-6 xl:mb-8 sm:gap-4">
        <button
          onClick={() => setSelectedType("All")}
          className={`px-6 py-3 bg-transparent border border-b-2 border-t-transparent border-l-transparent border-r-transparent ${selectedType === "All" ? "border-violet-500" : ""
            }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedType("Web")}
          className={`px-6 py-3 bg-transparent border border-b-2 border-t-transparent border-l-transparent border-r-transparent ${selectedType === "Web" ? "border-violet-500" : ""
            }`}
        >
          Web
        </button>
        <button
          onClick={() => setSelectedType("Desktop")}
          className={`px-6 py-3 bg-transparent border border-b-2 border-t-transparent border-l-transparent border-r-transparent ${selectedType === "Desktop" ? "border-violet-500" : ""
            }`}
        >
          Desktop
        </button>
        <button
          onClick={() => setSelectedType("Mobile")}
          className={`px-6 py-3 bg-transparent border border-b-2 border-t-transparent border-l-transparent border-r-transparent ${selectedType === "Mobile" ? "border-violet-500" : ""
            }`}
        >
          Mobile
        </button>
      </div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) =>
          selectedType === "All" || project.type === selectedType ? (
            <motion.li
              key={`${index}-${selectedType}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.url}
              />
            </motion.li>
          ) : null
        )}
      </ul>
    </section>
  );
}

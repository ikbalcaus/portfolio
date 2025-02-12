"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "MyNotes",
    description: "Simple web application built with Vue.js for taking notes",
    image: "/images/projects/1.png",
    url: "https://github.com/ikbalcaus/MyNotes",
    type: "Web"
  },
  {
    id: 2,
    title: "HandSketch",
    description: "Drawing on Canvas with Hand Gestures + AI for Letter Recognition",
    image: "/images/projects/2.png",
    url: "https://github.com/ikbalcaus/HandSketch",
    type: "Desktop"
  },
  {
    id: 3,
    title: "BlitzQuiz",
    description: "Quiz game built with React.js and Express.js",
    image: "/images/projects/3.png",
    url: "https://github.com/ikbalcaus/BlitzQuiz",
    type: "Web"
  },
  {
    id: 4,
    title: "BaseCure",
    description: "Medical application built with C# .NET and Angular",
    image: "/images/projects/4.png",
    url: "https://github.com/ikbalcaus/BaseCure",
    type: "Web"
  },
  {
    id: 5,
    title: "QSD Web Shop",
    description: "Application built during QSD2024 internship",
    image: "/images/projects/5.png",
    url: "https://github.com/ikbalcaus/qsdshop-client",
    type: "Web"
  }
];

export default function() {
  const [selectedType, setSelectedType] = useState("All");

  return (
    <section id="projects" className="mt-16 mx-2">
      <h2 className="text-center text-4xl font-bold text-white mb-4 xl:mb-8">
        My Projects
      </h2>
      <div className="flex flex-col px-8 sm:px-0 sm:flex-row justify-center mb-6 xl:mb-8 sm:gap-4">
        <button
          onClick={() => setSelectedType("All")}
          className={`px-6 py-3 bg-transparent border border-b-2 border-t-transparent border-l-transparent border-r-transparent ${
            selectedType === "All" ? "border-violet-500" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedType("Web")}
          className={`px-6 py-3 bg-transparent border border-b-2 border-t-transparent border-l-transparent border-r-transparent ${
            selectedType === "Web" ? "border-violet-500" : ""
          }`}
        >
          Web
        </button>
        <button
          onClick={() => setSelectedType("Desktop")}
          className={`px-6 py-3 bg-transparent border border-b-2 border-t-transparent border-l-transparent border-r-transparent ${
            selectedType === "Desktop" ? "border-violet-500" : ""
          }`}
        >
          Desktop
        </button>
        <button
          onClick={() => setSelectedType("Mobile")}
          className={`px-6 py-3 bg-transparent border border-b-2 border-t-transparent border-l-transparent border-r-transparent ${
            selectedType === "Mobile" ? "border-violet-500" : ""
          }`}
        >
          Mobile
        </button>
      </div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {projectsData.map((project, index) => 
        (selectedType === "All" || project.type === selectedType) ? (
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
};

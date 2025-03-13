"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const tabData = [
  {
    title: "Work Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Freelancing</li>
        <li>QSD.BA Internship</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Faculty of Information Technologies</li>
        <li>Electrotechnical school “Gornji Vakuf”</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Foundational C# with Microsoft</li>
      </ul>
    ),
  },
];

export default function() {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white -mt-16 md:mt-0 xl:-mt-20" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center pb-4 md:py-8 px-4 xl:gap-16 pt-16 xl:pt-32 xl:px-16">
        <Image src="/images/about-image.png" alt="computer" className="hidden md:block" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with React.js, Angular, Vue.js, C# .NET, Python, Express.js, Next.js, TypeScript, JavaScript, SQL and more. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-4">
            {tabData.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

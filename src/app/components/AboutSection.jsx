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
        <li>Self-Employed Web Designer & Developer</li>
        <li>Quality Assurance Intership at Zira Group</li>
        <li>Frontend Developer Intership at QSD.BA</li>
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

export default function () {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white -mt-16 md:mt-16 xl:-mt-20" id="about">
      <div className="md:grid grid-cols-2 2xl:grid-cols-10 gap-8 items-center pb-4 md:py-8 xl:gap-16 pt-16 xl:pt-32">
        <Image
          src="/images/about-image.png"
          alt="computer"
          className="hidden md:block col-span-1 2xl:col-span-4"
          style={{
            borderRadius: "1px 1px 1px 1px",
          }}
          width={490}
          height={490}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full col-span-1 2xl:col-span-6">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            Junior Full-Stack Web Developer with experience in building
            responsive websites and web applications. Skilled in web design, web
            development, front-end and back-end programming, as well as QA
            testing. Experienced in creating efficient, user-friendly, and
            high-quality digital solutions. Able to work independently or in a
            team, and committed to learning new technologies and improving web
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-4">
            {tabData.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

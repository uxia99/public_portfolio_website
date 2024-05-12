"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-3">
        <li>Java (Spring)</li>
        <li>TypeScript (Next.js)</li>
        <li>JavaScript (React)</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-3">
        <li>{"1Z Lab's Dev Camp"}</li>
        <li>Multi-It Java Camp</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-3">
        <li>{"Software Engineer Intern at 1Z Lab's"}</li>
        <li>Designer Intern at SJAD</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image 
          src="/images/programming.png"
          width={400}
          height={300}
          alt="Programming"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {"I'm a software web developer with a passion for creating interactive and responsive web applications. I have experience with JavaScript, React, TypeScript, Java, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications."}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

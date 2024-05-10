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
        <li>Java</li>
        <li>Spring</li>
        <li>JavaScript</li>
        <li>Next.js</li>
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
            배움에 대한 의지와 열정을 가진 웹 개발자입니다. JavaScript, React, Java, HTML, CSS, 그리고 Git에 대한 경험을 바탕으로 사용자 친화적이면서도 기능적인 웹사이트를 개발하고자 노력했습니다. 팀 협력을 중요시 여기며, 새로운 기술을 빠르게 습득하고자 하는 의지와 함께, 지속적으로 지식과 기술을 확장해 나가는 것을 중요시 여깁니다. 
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

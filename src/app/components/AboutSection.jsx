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
        <li>Python</li>
        <li>TypeScript (Next.js)</li>
        <li>React (JavaScript)</li>
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
        <li>{"Developer Intern at 1Z Lab's"}</li>
        <li>{"Developer Intern at Solomon AI"}</li>
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
          <p className="text-base lg:text-md">
            {"인턴 개발자 경험을 통해 실무에 필요한 기술과 협업의 중요성을 배웠으며, 개인적인 프로젝트와 클론코딩, 학습을 하며 문제 해결 능력을 키워왔습니다. 디버깅 세션에도 참여하고 협업에 관한 서적을 읽으며 개발자로서 필요한 역량을 높이고자 노력합니다. 성취감에서 가장 큰 행복을 느끼는 사람으로서, 꾸준한 학습을 통해 최신 기술 트렌드를 따라가고, 이를 실제로 적용해보는 것을 좋아합니다. 어려움이 닥쳐도 끈기 있게 도전하는 태도를 바탕으로, 빠르게 성장하는 개발자가 되고자 노력하고 있습니다."}
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

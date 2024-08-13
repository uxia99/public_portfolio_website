"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "My Portfolio Website with Next.js",
    image: "/images/projects/portfolio_page.png",
    tag: ["All", "Side Project"],
    gitUrl: "https://github.com/uxia99/xia_portfolio.git",
    previewUrl: "https://xia-portfolio-psi.vercel.app/",
  },
  {
    id: 2,
    title: "Snake Breeding Management App",
    description: "AI Chat with response prompts of MBTI T and F",
    image: "/images/projects/snake_breeding.png",
    tag: ["All", "Side Project"],
    gitUrl: "https://github.com/uxia99/Snake_Breeding.git",
    previewUrl: "",
  },
  {
    id: 3,
    title: "NewsMetrics Dashboard",
    description: "CRUD-enabled Vehicle Information website",
    image: "/images/projects/fastview.png",
    tag: ["All", "Work Project"],
    gitUrl: "",
    previewUrl: "",
    
  },
  {
    id: 4,
    title: "Note + AI Chat Website",
    description: "Web site with Note and AI Chat",
    image: "/images/projects/note_ai_chat.png",
    tag: ["All", "Side Project"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Survey App",
    description: "Survey Form with CRUD function",
    image: "/images/projects/survey_app.png",
    tag: ["All", "Side Project"],
    gitUrl: "https://github.com/uxia99/survey-app.git",
    previewUrl: "https://survey-app-jade.vercel.app/",
  },
  {
    id: 6,
    title: "Exhibition Website",
    description: "Website with Event Information and Community",
    image: "/images/projects/multi_it_project.png",
    tag: ["All", "Side Project"],
    gitUrl: "https://github.com/jeonjin616/Expo_wave",
    previewUrl: "https://www.youtube.com/watch?v=opB9qCTnqSU",
  },
  {
    id: 7,
    title: "Todo List Website",
    description: "Todo List with CRUD function",
    image: "/images/projects/todo_list.png",
    tag: ["All", "Side Project"],
    gitUrl: "https://github.com/uxia99/todo-list-crud.git",
    previewUrl: "https://todo-list-crud-pi.vercel.app/",
  },
  {
    id: 8,
    title: "Data Processing",
    description: "Data Processing with Python for AI",
    image: "/images/projects/solomon_ai.png",
    tag: ["All", "Work Project"],
    gitUrl: "",
    previewUrl: "",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-7">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Side Project"
          isSelected={tag === "Side Project"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Work Project"
          isSelected={tag === "Work Project"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

// pages/profile.js
import { Fragment } from "react";
import { useRouter } from "next/navigation";
import profileData from "./profile.json";

const Portfolio = () => {
  const router = useRouter();
  const { name, title, description, skills, projects } = profileData;

  return (
    <div className="flex item-center justify-center bg-white h-full">
      <div className="py-2 w-2/3">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p>{description}</p>

        <h3>Skills:</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <h3>Projects:</h3>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;

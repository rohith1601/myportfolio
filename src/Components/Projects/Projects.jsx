import React from "react";

import styles from "./Projects.module.css";
import pic from '../../data/project.png'
import pic2 from '../../data/project2.png'

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const img = [pic,pic2]
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} img={img[id]}/>;
        })}
      </div>
    </section>
  );
};
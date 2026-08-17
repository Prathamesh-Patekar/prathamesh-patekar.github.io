import { projects } from '../../data/projects';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Projects.module.css';

export function Projects() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" className="reveal" ref={ref}>
      <div className="container">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects"
          subtitle="Production applications across healthcare, business systems, and e-commerce."
        />
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

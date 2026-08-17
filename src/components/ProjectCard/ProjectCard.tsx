import type { Project } from '../../types';
import { getProjectIcon } from '../../utils/projectIcons';
import { InlineList } from '../InlineList/InlineList';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = getProjectIcon(project.slug);

  return (
    <article className={styles.card}>
      <div className={styles.iconWrap} aria-hidden="true">
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <div className={styles.copy}>
        <span className={styles.category}>{project.category}</span>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>
        <InlineList items={project.tags} muted className={styles.meta} />
      </div>
    </article>
  );
}

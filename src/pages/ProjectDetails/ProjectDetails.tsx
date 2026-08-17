import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getProjectBySlug } from '../../data/projects';
import { ArchitectureDiagram } from '../../components/ArchitectureDiagram/ArchitectureDiagram';
import { InlineList } from '../../components/InlineList/InlineList';
import styles from './ProjectDetails.module.css';

export function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/" replace />;

  const { caseStudy: cs } = project;

  return (
    <main className={styles.main}>
      <div className="container">
        <Link to="/#projects" className={styles.back}>
          <ArrowLeft size={16} aria-hidden="true" /> Back to projects
        </Link>

        <header className={styles.header}>
          <span className={styles.category}>{project.category}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.platform}>{project.platform}</p>
          <InlineList items={project.tags} muted className={styles.tags} />
        </header>

        <article className={styles.content}>
          <section className={styles.block}>
            <h2>Overview</h2>
            <p>{cs.overview}</p>
          </section>

          <section className={styles.block}>
            <h2>Problem</h2>
            <p>{cs.problem}</p>
          </section>

          <section className={styles.block}>
            <h2>Architecture</h2>
            <p>{cs.architecture}</p>
            {project.slug === 'swasthaone' && <ArchitectureDiagram />}
          </section>

          <section className={styles.block}>
            <h2>My contribution</h2>
            <p>{cs.contribution}</p>
          </section>

          <section className={styles.block}>
            <h2>Technology</h2>
            <InlineList items={cs.technology} />
          </section>

          <section className={styles.block}>
            <h2>Technical challenges</h2>
            <ul>
              {cs.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          <section className={styles.block}>
            <h2>Solutions</h2>
            <ul>
              {cs.solutions.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>

          <section className={styles.block}>
            <h2>Outcome</h2>
            <p>{cs.outcome}</p>
          </section>
        </article>
      </div>
    </main>
  );
}

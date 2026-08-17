import { profile } from '../../data/profile';
import { Panel, PanelRow } from '../../components/Panel/Panel';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.css';

export function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="reveal" ref={ref}>
      <div className="container">
        <SectionHeader
          title="How I work"
          subtitle="AI-assisted tooling supports delivery — architecture decisions and code quality stay human-led."
        />
        <Panel>
          {profile.aiTools.map((tool) => (
            <PanelRow key={tool.name} className={styles.row}>
              <h3 className={styles.name}>{tool.name}</h3>
              <p className={styles.use}>{tool.use}</p>
            </PanelRow>
          ))}
        </Panel>
      </div>
    </section>
  );
}

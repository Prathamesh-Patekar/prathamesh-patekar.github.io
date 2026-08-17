import { experience } from '../../data/experience';
import { Panel, PanelRow } from '../../components/Panel/Panel';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Experience.module.css';

export function Experience() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="experience" className="reveal" ref={ref}>
      <div className="container">
        <SectionHeader
          eyebrow="Career"
          title="Professional experience"
          subtitle="Delivering production software across healthcare, e-commerce, and enterprise — from architecture through deployment."
        />
        <Panel>
          {experience.map((item) => (
            <PanelRow key={item.company} className={styles.row}>
              <div className={styles.meta}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{item.role}</h3>
                    <p className={styles.company}>{item.company}</p>
                  </div>
                  <span className={`${styles.period} ${item.current ? styles.current : ''}`}>
                    {item.period}
                  </span>
                </div>
              </div>
              <ul className={styles.highlights}>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </PanelRow>
          ))}
        </Panel>
      </div>
    </section>
  );
}

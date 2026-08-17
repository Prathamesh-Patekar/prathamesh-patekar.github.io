import { education } from '../../data/education';
import { Panel, PanelRow } from '../../components/Panel/Panel';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Education.module.css';

export function Education() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="reveal" ref={ref}>
      <div className="container">
        <SectionHeader title="Education" />
        <Panel>
          {education.map((item) => (
            <PanelRow key={item.degree} className={styles.row}>
              <div>
                <h3 className={styles.degree}>{item.degree}</h3>
                <p className={styles.institution}>{item.institution}</p>
              </div>
              <div className={styles.meta}>
                <span>{item.period}</span>
                {item.score && <span className={styles.score}>{item.score}</span>}
              </div>
            </PanelRow>
          ))}
        </Panel>
      </div>
    </section>
  );
}

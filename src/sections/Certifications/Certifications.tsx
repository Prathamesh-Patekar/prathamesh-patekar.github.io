import { certifications, activities } from '../../data/education';
import { Panel, PanelRow } from '../../components/Panel/Panel';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Certifications.module.css';

export function Certifications() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="reveal" ref={ref}>
      <div className="container">
        <SectionHeader title="Certifications & activities" />
        <Panel>
          {certifications.map((cert) => (
            <PanelRow key={cert.title} className={styles.certRow}>
              <p className={styles.certTitle}>{cert.title}</p>
              {cert.detail && <p className={styles.certDetail}>{cert.detail}</p>}
            </PanelRow>
          ))}
          <PanelRow className={styles.activitiesRow}>
            <h3 className={styles.activitiesTitle}>Additional activities</h3>
            <ul className={styles.activities}>
              {activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </PanelRow>
        </Panel>
      </div>
    </section>
  );
}

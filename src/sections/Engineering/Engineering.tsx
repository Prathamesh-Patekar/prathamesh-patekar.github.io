import { engineeringSteps } from '../../data/engineering';
import { Panel, PanelRow } from '../../components/Panel/Panel';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Engineering.module.css';

export function Engineering() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="reveal" ref={ref}>
      <div className="container">
        <SectionHeader title="How I build software" subtitle="A disciplined workflow from requirements through deployment." />
        <Panel>
          {engineeringSteps.map((step) => (
            <PanelRow key={step.step} className={styles.row}>
              <span className={styles.step}>{step.step}</span>
              <div className={styles.content}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.desc}>{step.description}</p>
              </div>
            </PanelRow>
          ))}
        </Panel>
      </div>
    </section>
  );
}

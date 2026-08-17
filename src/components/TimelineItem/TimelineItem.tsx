import type { ExperienceItem } from '../../types';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  item: ExperienceItem;
}

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <div className={styles.item}>
      <div className={`${styles.dot} ${item.current ? styles.current : ''}`} />
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.role}>{item.role}</h3>
            <p className={styles.company}>{item.company}</p>
          </div>
          <span className={styles.period}>{item.period}</span>
        </div>
        <ul className={styles.highlights}>
          {item.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

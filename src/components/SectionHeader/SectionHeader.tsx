import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export function SectionHeader({ title, subtitle, eyebrow }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}

import styles from './InlineList.module.css';

interface InlineListProps {
  items: string[];
  muted?: boolean;
  className?: string;
}

export function InlineList({ items, muted = false, className = '' }: InlineListProps) {
  return (
    <p className={`${styles.list} ${muted ? styles.muted : ''} ${className}`}>
      {items.map((item, index) => (
        <span key={item}>
          {index > 0 && (
            <span className={styles.separator} aria-hidden="true">
              ·
            </span>
          )}
          {item}
        </span>
      ))}
    </p>
  );
}

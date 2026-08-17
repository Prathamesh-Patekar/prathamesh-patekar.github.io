import styles from './Panel.module.css';

interface PanelProps {
  children: React.ReactNode;
  className?: string;
}

export function Panel({ children, className = '' }: PanelProps) {
  return <div className={`${styles.panel} ${className}`}>{children}</div>;
}

export function PanelRow({ children, className = '' }: PanelProps) {
  return <div className={`${styles.row} ${className}`}>{children}</div>;
}

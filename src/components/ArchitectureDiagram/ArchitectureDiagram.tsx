import styles from './ArchitectureDiagram.module.css';

export function ArchitectureDiagram() {
  return (
    <div className={styles.wrapper} role="img" aria-label="SwasthaOne system architecture diagram">
      <svg viewBox="0 0 800 320" className={styles.svg} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#60a5fa" />
          </marker>
        </defs>

        {/* Frontend */}
        <rect x="40" y="120" width="160" height="80" rx="8" className={styles.box} />
        <text x="120" y="155" className={styles.label}>React Frontend</text>
        <text x="120" y="175" className={styles.sublabel}>UI Components</text>

        {/* Laravel API */}
        <rect x="320" y="120" width="160" height="80" rx="8" className={styles.boxAccent} />
        <text x="400" y="155" className={styles.label}>Laravel API</text>
        <text x="400" y="175" className={styles.sublabel}>REST / Auth</text>

        {/* Database */}
        <rect x="600" y="120" width="160" height="80" rx="8" className={styles.box} />
        <text x="680" y="155" className={styles.label}>Database</text>
        <text x="680" y="175" className={styles.sublabel}>PostgreSQL / MySQL</text>

        {/* Integrations */}
        <rect x="280" y="20" width="240" height="60" rx="8" className={styles.box} />
        <text x="400" y="48" className={styles.label}>External Integrations</text>
        <text x="400" y="66" className={styles.sublabel}>ABHA • Partners • Documents</text>

        {/* Arrows */}
        <line x1="200" y1="160" x2="318" y2="160" className={styles.arrow} markerEnd="url(#arrow)" />
        <line x1="480" y1="160" x2="598" y2="160" className={styles.arrow} markerEnd="url(#arrow)" />
        <line x1="400" y1="80" x2="400" y2="118" className={styles.arrow} markerEnd="url(#arrow)" />
      </svg>
    </div>
  );
}

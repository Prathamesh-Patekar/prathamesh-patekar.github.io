import { profile } from '../../data/profile';
import { contact } from '../../data/contact';
import { Button } from '../../components/Button/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Hero.module.css';

export function Hero() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" className={`${styles.hero} reveal`} ref={ref}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.main}>
            <h1 className={styles.name}>{profile.name}</h1>
            <p className={styles.meta}>
              <span className={styles.role}>{profile.role}</span>
              <span className={styles.sep} aria-hidden="true">
                ·
              </span>
              <span className={styles.location}>{contact.location}</span>
            </p>
            <p className={styles.about}>{profile.about}</p>

            <div className={styles.actions}>
              <Button href="#projects" variant="primary">
                View selected work
              </Button>
              <a href={contact.resumePath} className={styles.resumeLink} download>
                Download resume
              </a>
            </div>
          </div>

          <aside className={styles.profileCard} aria-label="Profile photo">
            <div className={styles.photoWrap}>
              <img
                src={profile.photo}
                alt={`${profile.name}, ${profile.role}`}
                className={styles.photo}
                width={260}
                height={260}
              />
            </div>
          </aside>
        </div>

        <dl className={styles.stats}>
          {profile.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.statLabel}>{stat.label}</dt>
              <dd className={styles.statValue}>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

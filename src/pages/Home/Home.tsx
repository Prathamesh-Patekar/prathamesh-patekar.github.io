import { Hero } from '../../sections/Hero/Hero';
import { About } from '../../sections/About/About';
import { Skills } from '../../sections/Skills/Skills';
import { Experience } from '../../sections/Experience/Experience';
import { Projects } from '../../sections/Projects/Projects';
import { Engineering } from '../../sections/Engineering/Engineering';
import { Education } from '../../sections/Education/Education';
import { Certifications } from '../../sections/Certifications/Certifications';
import { Contact } from '../../sections/Contact/Contact';
import styles from './Home.module.css';

export function Home() {
  return (
    <main id="main-content" className={styles.main}>
      <Hero />
      <div className={styles.sections}>
        <Experience />
        <Projects />
        <Skills />
        <Engineering />
        <Education />
        <Certifications />
        <About />
        <Contact />
      </div>
    </main>
  );
}

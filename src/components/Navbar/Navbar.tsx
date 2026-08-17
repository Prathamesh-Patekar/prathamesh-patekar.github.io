import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/contact';
import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './Navbar.module.css';

const sectionIds = ['about', 'experience', 'projects', 'skills', 'contact'];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleClick = () => setOpen(false);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Main navigation">
        <a href="#" className={styles.brand} onClick={handleClick}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.brandFull}>Prathamesh Patekar</span>
          <span className={styles.brandShort}>Prathamesh</span>
        </a>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === id ? styles.active : ''}
                  onClick={handleClick}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a href="#contact" className={styles.contactBtn} onClick={handleClick}>
          Contact
        </a>

        <button
          type="button"
          className={styles.menuBtn}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
    </header>
  );
}

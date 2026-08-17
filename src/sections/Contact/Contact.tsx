import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from '../../components/Icons/SocialIcons';
import { contact } from '../../data/contact';
import { Button } from '../../components/Button/Button';
import { Panel, PanelRow } from '../../components/Panel/Panel';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Contact.module.css';

export function Contact() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" className="reveal" ref={ref}>
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title="Let's discuss your next project"
          subtitle="Open to software engineering roles, freelance engagements, and technical collaborations."
        />
        <Panel className={styles.panel}>
          <PanelRow className={styles.row}>
            <div className={styles.links}>
              <a href={`mailto:${contact.email}`} className={styles.link}>
                <Mail size={18} aria-hidden="true" />
                <span>{contact.email}</span>
              </a>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className={styles.link}>
                <Phone size={18} aria-hidden="true" />
                <span>{contact.phone}</span>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <span className={styles.linkStatic}>
                <MapPin size={18} aria-hidden="true" />
                <span>{contact.location}</span>
              </span>
            </div>
            <Button href={`mailto:${contact.email}`} variant="primary">
              Send an email
            </Button>
          </PanelRow>
        </Panel>
      </div>
    </section>
  );
}

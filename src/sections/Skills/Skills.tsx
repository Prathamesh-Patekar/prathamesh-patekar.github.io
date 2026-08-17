import { Database, GitBranch, Layout, Server, ShoppingBag } from 'lucide-react';
import { skillGroups } from '../../data/skills';
import { InlineList } from '../../components/InlineList/InlineList';
import { Panel, PanelRow } from '../../components/Panel/Panel';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Skills.module.css';

const groupIcons = [Server, Layout, Database, ShoppingBag, GitBranch] as const;

export function Skills() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" className="reveal" ref={ref}>
      <div className="container">
        <SectionHeader
          eyebrow="Capabilities"
          title="Technical expertise"
          subtitle="A focused stack refined through years of building production systems — from backend platforms to client-facing applications."
        />
        <Panel>
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[index];

            return (
              <PanelRow key={group.title} className={styles.row}>
                <div className={styles.meta}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className={styles.title}>{group.title}</h3>
                    <p className={styles.description}>{group.description}</p>
                  </div>
                </div>
                <InlineList items={group.skills} className={styles.skills} />
              </PanelRow>
            );
          })}
        </Panel>
      </div>
    </section>
  );
}

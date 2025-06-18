import './Section.css';

import { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  children: React.ReactNode;
}

export function Section({ id, title, children, ...props }: SectionProps) {
  return (
    <section id={id} className="layout-section" {...props}>
      <div className="section-title-wrapper">
        <h2 className="section-title-heading">{title}</h2>
      </div>
      {children}
    </section>
  );
}

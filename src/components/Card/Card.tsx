import { ExternalLinkIcon } from '../icons/ExternalLinkIcon';
import './Card.css';
import classNames from 'classnames';
import { motion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  clickable?: boolean;
  href?: string;
  index?: number;
}

export function Card({ children, className, clickable, href, index = 0 }: CardProps) {
  const content = clickable ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={classNames('card', className, { clickable: clickable })}
    >
      <ExternalLinkIcon />
      {children}
    </a>
  ) : (
    <div className={classNames('card', className, { clickable: clickable })}>{children}</div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      {content}
    </motion.div>
  );
}

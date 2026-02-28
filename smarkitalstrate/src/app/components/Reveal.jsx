'use client';

import { useReveal } from './useReveal';
import styles from './Reveal.module.css';

export default function Reveal({ 
  children, 
  delay = 0,
  variant = 'fade-up',
  className = '',
  stagger = false
}) {
  const [ref, isVisible] = useReveal({ once: true });

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[variant]} ${isVisible ? styles.visible : ''} ${stagger ? styles.stagger : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import styles from './ValueRotator.module.css';

export default function ValueRotator({ messages = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || messages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, messages.length]);

  if (messages.length === 0) return null;

  return (
    <div className={styles.rotator} aria-live="polite">
      {messages.map((message, index) => (
        <span
          key={index}
          className={`${styles.message} ${index === currentIndex ? styles.active : ''}`}
        >
          {message}
        </span>
      ))}
    </div>
  );
}

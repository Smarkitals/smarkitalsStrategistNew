'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './StickyScrollytelling.module.css';

export default function StickyScrollytelling({ steps = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || steps.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.5,
    };

    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex(index);
            }
          });
        },
        observerOptions
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs && obs.disconnect());
    };
  }, [steps.length]);

  const activeStep = steps[activeIndex] || steps[0];

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.stickyColumn}>
        <div className={styles.stickyContent}>
          <div className={styles.stickyLabel}>OUR PROCESS</div>
          <h2 className={styles.stickyTitle}>How We Work</h2>
          <div className={styles.progressRail}>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`${styles.progressStep} ${index === activeIndex ? styles.active : ''}`}
              >
                <div className={styles.progressDot}>
                  {index === activeIndex && <div className={styles.progressDotInner} />}
                </div>
                <div className={styles.progressStepContent}>
                  <div className={styles.progressStepNumber}>{step.step}</div>
                  <div className={styles.progressStepTitle}>{step.title}</div>
                </div>
              </div>
            ))}
          </div>
          {activeStep && (
            <div className={styles.stickyDescription}>
              {activeStep.description}
            </div>
          )}
        </div>
      </div>
      <div className={styles.contentColumn}>
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (stepRefs.current[index] = el)}
            className={`${styles.stepContent} ${index === activeIndex ? styles.active : ''}`}
          >
            <div className={styles.stepBadge}>{step.step}</div>
            <h3 className={styles.contentTitle}>{step.title}</h3>
            {step.deliverables && (
              <div className={styles.stepDeliverables}>
                <strong className={styles.deliverablesLabel}>Deliverables:</strong>
                <ul className={styles.deliverablesList}>
                  {step.deliverables.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className={styles.stepMeta}>
              {step.timeline && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Typical Timeline:</span>
                  <span className={styles.metaValue}>{step.timeline}</span>
                </div>
              )}
              {step.outputs && (
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Outputs:</span>
                  <span className={styles.metaValue}>{step.outputs}</span>
                </div>
              )}
            </div>
            {step.detail && (
              <p className={styles.contentDetail}>{step.detail}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

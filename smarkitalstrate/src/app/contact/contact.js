'use client';

import Nav from "../nav/navbar";
import Footer from "../nav/footer";
import Section from "../components/Section";
import ContactForm from './contactForm';
import styles from "../css/leadLanding.module.css";
import "../globals.css";

const WHATSAPP_URL =
  'https://wa.me/919310624966?text=Hi%20Smarkitals%20Team%2C%20I%20need%20consultation%20for%20my%20business.';

export default function Contact() {
  const trackEvent = (eventName) => {
    // Gtag is injected in `src/app/layout.js`
    if (typeof window === 'undefined') return;
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName);
      } else if (window.dataLayer && typeof window.dataLayer.push === 'function') {
        window.dataLayer.push({ event: eventName });
      }
    } catch {
      // Ignore analytics errors to keep the form reliable
    }
  };

  return (
    <div className={styles.leadAll}>
      <header className="nav">
        <Nav />
      </header>

      <main>
        <Section variant="accent" className={`${styles.heroSection} sectionWash`}>
          <div className="container">
            <div className={styles.heroInner}>
              <div>
                <h1 className={styles.heroTitle}>GST, ITR &amp; Business Advisory for MSMEs</h1>
                <p className={styles.heroSubtitle}>
                  Professional financial, compliance and business consulting support for growing businesses.
                </p>

                <div className={styles.heroCTA}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.ctaLink} ${styles.ctaPrimary}`}
                    onClick={() => trackEvent('whatsapp_click')}
                  >
                    Chat on WhatsApp
                  </a>

                  <a
                    href="tel:9310624966"
                    className={`${styles.ctaLink} ${styles.ctaSecondary}`}
                    onClick={() => trackEvent('call_click')}
                  >
                    Call Now
                  </a>

                  <a
                    href="#lead-form"
                    className={`${styles.ctaLink} ${styles.ctaGhost} ${styles.ctaButtonGhost}`}
                  >
                    Request a Call Back
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="lead-form" className={styles.formSection}>
          <div className="container">
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="footer">
        <Footer />
      </footer>

      {/* Mobile sticky bottom bar (WhatsApp / Call / Form) */}
      <nav className={styles.stickyBar} aria-label="Quick contact actions">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.stickyBtn}
          onClick={() => trackEvent('whatsapp_click')}
        >
          <svg
            className={styles.stickyBtnIcon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <strong>WhatsApp</strong>
        </a>

        <a
          href="tel:9310624966"
          className={styles.stickyBtn}
          onClick={() => trackEvent('call_click')}
        >
          <svg
            className={styles.stickyBtnIcon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <strong>Call</strong>
        </a>

        <a href="#lead-form" className={styles.stickyBtn}>
          <svg
            className={styles.stickyBtnIcon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <strong>Form</strong>
        </a>
      </nav>
    </div>
  );
}

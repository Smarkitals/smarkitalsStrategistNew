'use client';

import { useRouter } from 'next/navigation';
import styles from "../css/nav.module.css";

export default function Footer() {
  const router = useRouter();

  const handleClick = (path) => (e) => {
    e.preventDefault();
    router.push(path);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/why-choose-us', label: 'Why Choose Us' },
    { path: '/contact', label: 'Contact' },
    { path: '/privacy-policy', label: 'Privacy Policy' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerUpper}>
          <div className={styles.footerUpperAbout}>
            <h2>Smarkitals Strategist LLP</h2>
            <p>
              Part of Smarkitals Group of Companies, we provide comprehensive 
              financial and management consulting services to help businesses 
              grow and succeed.
            </p>
            <div className={styles.footerUpperAboutIcons}>
              <a 
                href="https://www.linkedin.com/company/smarkitals-strategist-llp/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.footerUpperLinks}>
            <h3>Quick Links</h3>
            <nav className={styles.footerLinks} aria-label="Footer navigation">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={handleClick(link.path)}
                  className={styles.footerLink}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.footerUpperContact}>
            <h3>Contact Info</h3>
            <div className={styles.footerUpperContactDetails}>
              <div>
                <a 
                  href="tel:+919891894129"
                  aria-label="Call us at +91-9891894129"
                >
                  +91-9891894129
                </a>
              </div>
              <div>
                <a 
                  href="tel:+917678255626"
                  aria-label="Call us at +91-7678255626"
                >
                  +91-7678255626
                </a>
              </div>
              <div>
                <a 
                  href="mailto:info@smarkitals.in"
                  aria-label="Email us at info@smarkitals.in"
                >
                  info@smarkitals.in
                </a>
              </div>
              <div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Unit-A908+Royal+Garden+Shalimar+City+Ghaziabad+Uttar+Pradesh+India-201005"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View our office location on Google Maps"
                >
                  Unit-A908 Royal Garden Shalimar City<br />
                  Ghaziabad Uttar Pradesh<br />
                  India-201005
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.hr} />

        <div className={styles.footerLower}>
          <h4>
            &copy; 2025 Smarkitals Strategist LLP. All Rights Reserved.
            <br />
            India's Trusted Business & Financial Strategy Consulting Firm
          </h4>
          <nav className={styles.footerLowerLinks} aria-label="Footer bottom navigation">
            {navLinks.map((link, index) => (
              <span key={link.path}>
                {index > 0 && <span aria-hidden="true"> | </span>}
                <a
                  href={link.path}
                  onClick={handleClick(link.path)}
                  className={styles.footerLink}
                >
                  {link.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Nav from "../nav/navbar";
import Footer from "../nav/footer";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import Card from "../components/Card";
import ContactForm from './contactForm';
import Reveal from "../components/Reveal";
import styles from "../css/contact.module.css";
import "../globals.css";

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Phone",
      items: [
        { text: "+91-9891894129", href: "https://wa.me/919891894129", label: "Call or WhatsApp" },
        { text: "+91-7678255626", href: "https://wa.me/917678255626", label: "Call or WhatsApp" }
      ],
      note: "Call us during business hours"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
      title: "Email",
      items: [
        { text: "info@smarkitals.in", href: "mailto:info@smarkitals.in", label: "Send us an email" }
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Address",
      items: [
        { 
          text: "Unit-A908 Royal Garden Shalimar City\nGhaziabad Uttar Pradesh\nIndia-201005", 
          href: "https://www.google.com/maps/search/?api=1&query=Unit-A908+Royal+Garden+Shalimar+City+Ghaziabad+Uttar+Pradesh+India-201005",
          label: "View our office location on Google Maps"
        }
      ],
      note: "Visit our office"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: "Hours",
      items: [
        { text: "Mon - Fri: 9:00 AM - 6:00 PM" },
        { text: "Sat: 10:00 AM - 2:00 PM" }
      ],
      note: "Our business hours"
    }
  ];

  return (
    <div className={styles.contactAll}>
      <header className="nav">
        <Nav />
      </header>

      <main>
        <PageHeader 
          title="Get in Touch"
          subtitle="Ready to take your business to the next level? Our advisors specialize in helping MSMEs and corporates strengthen financial planning, governance, and strategic execution."
          highlight="Touch"
        />

        <Section>
          <div className="container">
            <div className={styles.contactGrid}>
              <Reveal>
                <div className={styles.contactFormSection}>
                  <h2 className={styles.sectionTitle}>Send us a Message</h2>
                  <ContactForm />
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className={styles.contactInfoSection}>
                  <h2 className={styles.sectionTitle}>Contact Information</h2>
                  <div className={styles.contactInfoGrid}>
                    {contactInfo.map((info, index) => (
                      <Card key={index} className={styles.contactInfoCard}>
                        <div className={styles.contactInfoIcon}>
                          {info.icon}
                        </div>
                        <h3 className={styles.contactInfoTitle}>{info.title}</h3>
                        <div className={styles.contactInfoItems}>
                          {info.items.map((item, idx) => (
                            <div key={idx}>
                              {item.href ? (
                                <a
                                  href={item.href}
                                  target={item.href.startsWith('http') ? '_blank' : undefined}
                                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  aria-label={item.label || item.text}
                                  className={styles.contactInfoLink}
                                >
                                  {item.text.split('\n').map((line, i) => (
                                    <span key={i}>
                                      {line}
                                      {i < item.text.split('\n').length - 1 && <br />}
                                    </span>
                                  ))}
                                </a>
                              ) : (
                                <p className={styles.contactInfoText}>{item.text}</p>
                              )}
                            </div>
                          ))}
                        </div>
                        {info.note && (
                          <p className={styles.contactInfoNote}>{info.note}</p>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

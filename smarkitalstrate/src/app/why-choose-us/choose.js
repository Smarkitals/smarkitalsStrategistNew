'use client';

import Nav from "../nav/navbar";
import Footer from "../nav/footer";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import Tabs from "../components/Tabs";
import styles from "../css/whyChooseUs.module.css";
import "../globals.css";

export default function WhyChooseUs() {
  const differentiators = [
    {
      title: "Execution-Led Strategy",
      description: "We don't just design strategies—we ensure they're implemented. Our approach bridges the gap between planning and execution, delivering measurable outcomes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
          <circle cx="12" cy="8" r="6"></circle>
        </svg>
      )
    },
    {
      title: "Finance + Risk Depth",
      description: "Deep expertise in both financial strategy and risk management. We understand how financial decisions impact risk profiles and vice versa.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      )
    },
    {
      title: "Founder-Led Attention",
      description: "Direct access to partners who bring 35+ years of combined experience. No junior consultants—senior expertise from day one.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: "Process + Governance Focus",
      description: "We build systems, not just solutions. Every engagement includes process documentation, controls, and governance frameworks for long-term sustainability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    }
  ];

  const engagementTabs = [
    {
      label: "Advisory",
      content: (
        <div className={styles.engagementContent}>
          <h3 className={styles.engagementContentTitle}>Advisory</h3>
          <p className={styles.engagementContentDescription}>
            Strategic guidance and periodic reviews for ongoing business decisions.
          </p>
          <ul className={styles.engagementContentList}>
            <li>Regular strategic consultations</li>
            <li>Periodic financial reviews</li>
            <li>Decision support on key initiatives</li>
            <li>Flexible engagement terms</li>
          </ul>
        </div>
      )
    },
    {
      label: "Project-Based",
      content: (
        <div className={styles.engagementContent}>
          <h3 className={styles.engagementContentTitle}>Project-Based</h3>
          <p className={styles.engagementContentDescription}>
            Focused engagements for specific initiatives like fundraising, restructuring, or system implementation.
          </p>
          <ul className={styles.engagementContentList}>
            <li>Defined scope and deliverables</li>
            <li>Time-bound execution</li>
            <li>Clear milestones and outcomes</li>
            <li>Ideal for specific transformation needs</li>
          </ul>
        </div>
      )
    },
    {
      label: "Retainer",
      content: (
        <div className={styles.engagementContent}>
          <h3 className={styles.engagementContentTitle}>Retainer</h3>
          <p className={styles.engagementContentDescription}>
            Ongoing support with dedicated resources for continuous improvement and execution.
          </p>
          <ul className={styles.engagementContentList}>
            <li>Dedicated consultant access</li>
            <li>Continuous monitoring and support</li>
            <li>Proactive strategic guidance</li>
            <li>Long-term partnership model</li>
          </ul>
        </div>
      )
    }
  ];

  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "35+", label: "Years Experience" },
    { number: "50+", label: "Expert Team Members" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div className={styles.whyChooseUsAll}>
      <header className="nav">
            <Nav />
      </header>

      <main>
        <PageHeader 
          title="Why Choose Smarkitals Strategist"
          subtitle="Your growth partner in financial strategy, business planning, and governance transformation."
          highlight="Smarkitals Strategist"
        />

        {/* Stats */}
        <Section variant="surface">
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <Reveal key={index} delay={index * 50}>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
</div>
                </Reveal>
              ))}
            </div>
        </div>
        </Section>

        {/* Differentiators */}
        <Section>
          <div className="container">
            <Reveal>
              <div className={styles.sectionHeader}>
                <h2>Our Differentiators</h2>
                <p className={styles.sectionSubtitle}>
                  What makes us the right choice for your business consulting needs.
                </p>
        </div>
            </Reveal>

            <div className={styles.differentiatorsGrid}>
              {differentiators.map((item, index) => (
                <Reveal key={index} delay={index * 50}>
                  <Card hover>
                    <div className={styles.differentiatorIcon}>
                      {item.icon}
            </div>
                    <h3 className={styles.differentiatorTitle}>{item.title}</h3>
                    <p className={styles.differentiatorDescription}>{item.description}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
        </div>
        </Section>

        {/* Engagement Models */}
        <Section variant="accent">
          <div className="container">
            <Reveal>
              <div className={styles.sectionHeader}>
                <h2>Engagement Models</h2>
                <p className={styles.sectionSubtitle}>
                  Flexible approaches tailored to your needs and stage of growth.
    </p>
</div>
            </Reveal>

            <Reveal delay={100}>
              <Card className={styles.engagementCard}>
                <Tabs tabs={engagementTabs} defaultTab={0} />
              </Card>
            </Reveal>
            </div>
        </Section>

        {/* Success Priority */}
        <Section>
          <div className="container">
            <Reveal>
              <Card className={styles.priorityCard}>
                <h2 className={styles.priorityTitle}>Your Success is Our Priority</h2>
                <p className={styles.priorityDescription}>
                  We measure our success by the growth and achievements of our clients. 
                  Every strategy we develop, every solution we implement, is designed 
                  with your long-term success in mind.
                </p>
                <ul className={styles.priorityList}>
                  <li>Customized strategies for each client</li>
                  <li>Regular progress monitoring and reporting</li>
                  <li>Continuous support and guidance</li>
                  <li>Long-term partnership approach</li>
        </ul>
              </Card>
            </Reveal>
    </div>
        </Section>
      </main>

      <footer className="footer">
                  <Footer />
      </footer>
    </div>
  );
}

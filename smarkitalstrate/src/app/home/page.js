'use client';

import { useRouter } from 'next/navigation';
import Nav from "../nav/navbar";
import Footer from "../nav/footer";
import Section from "../components/Section";
import Button from "../components/Button";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import ValueRotator from "../components/ValueRotator";
import StickyScrollytelling from "../components/StickyScrollytelling";
import styles from "../css/home.module.css";
import '../globals.css';

export default function Home() {
  const router = useRouter();

  const handleClick = (path) => () => {
    router.push(path);
  };

  const valueMessages = [
    "Risk + Finance + Strategy",
    "India-first MSME focus",
    "Execution-led approach"
  ];

  const services = [
    {
      title: "Financial Strategy & Planning",
      description: "Build robust financial systems, optimize cash flow, and drive profitability through data-driven planning.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="2" y2="22"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      title: "Risk & Governance Advisory",
      description: "Strengthen internal controls, design audit-ready processes, and mitigate operational risks.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      )
    },
    {
      title: "Corporate Strategy & Performance",
      description: "Design growth roadmaps, optimize operations, and execute strategic transformations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      )
    },
    {
      title: "Startup & MSME Advisory",
      description: "Navigate early-stage challenges, secure funding readiness, and scale with confidence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Diagnose",
      description: "Deep-dive analysis of financial systems, processes, and strategic gaps",
      detail: "We begin with a comprehensive assessment of your current financial landscape, operational processes, and strategic positioning. Our diagnostic phase identifies critical gaps, opportunities, and risks that inform the entire engagement.",
      deliverables: [
        "Financial health assessment",
        "Process gap analysis",
        "Strategic positioning review",
        "Risk identification matrix"
      ],
      timeline: "2–3 weeks",
      outputs: "Diagnostic memo, Gap analysis report, Strategic recommendations"
    },
    {
      step: "02",
      title: "Design",
      description: "Custom strategy and implementation plan aligned with your goals",
      detail: "Based on our diagnostic findings, we craft tailored strategies and actionable roadmaps. Every recommendation is designed to align with your specific business objectives, market context, and growth trajectory.",
      deliverables: [
        "Strategic roadmap",
        "Implementation framework",
        "Resource allocation plan",
        "Success metrics definition"
      ],
      timeline: "1–2 weeks",
      outputs: "Strategic roadmap, Implementation plan, KPI framework"
    },
    {
      step: "03",
      title: "Deliver",
      description: "Ongoing guidance and hands-on support to ensure measurable outcomes",
      detail: "We partner with you through execution, providing continuous support, monitoring progress, and adjusting strategies as needed. Our goal is to ensure every recommendation translates into measurable business impact.",
      deliverables: [
        "Execution support",
        "Progress monitoring",
        "Performance optimization",
        "Continuous refinement"
      ],
      timeline: "4–8 weeks",
      outputs: "Execution plan, Progress reports, Performance dashboards"
    }
  ];

  const impactSnapshots = [
    {
      scenario: "MSME Manufacturing",
      intervention: "Financial restructuring, cost optimization, and working capital management",
      outcome: "Improved visibility, reduced cost leakage, faster month-end closure"
    },
    {
      scenario: "Growth-Stage Startup",
      intervention: "Fundraising readiness, financial modeling, and governance framework",
      outcome: "Investment-ready financial systems, clear investor narrative, streamlined operations"
    },
    {
      scenario: "Family Business",
      intervention: "Strategic planning, succession framework, and performance monitoring",
      outcome: "Clear growth roadmap, structured governance, sustainable profitability"
    }
  ];

  return (
    <div className={styles.homeAll}>
      <header className="nav">
        <Nav />
      </header>

      <main>
        {/* Premium Hero Section */}
        <Section variant="accent" className={`${styles.hero} sectionWash`}>
          <div className="container">
            <div className={styles.heroContent}>
              <Reveal variant="fadeUp">
                <h1 className={styles.heroTitle}>
                  Strategic Financial Advisory for
                  <span className={styles.heroHighlight}> Growth-Focused Businesses</span>
                </h1>
                <p className={styles.heroSubtitle}>
                  We help startups, MSMEs, and enterprises achieve profitability, 
                  financial control, and sustainable growth through strategic planning, 
                  cost optimization, and governance excellence.
                </p>
                <div className={styles.heroValueLine}>
                  <ValueRotator messages={valueMessages} />
                </div>
                <div className={styles.heroCTAs}>
                  <Button 
                    href="/contact" 
                    variant="primary" 
                    size="md"
                    onClick={handleClick('/contact')}
                  >
                    Book a Strategy Call
                  </Button>
                  <Button 
                    href="/services" 
                    variant="secondary" 
                    size="md"
                    onClick={handleClick('/services')}
                  >
                    Explore Services
                  </Button>
                </div>
              </Reveal>
              
              <Reveal delay={100} variant="fadeUp">
                <div className={styles.credibilityPanel}>
                  <div className={styles.credibilityItem}>
                    <strong>Risk + Finance + Strategy</strong>
                    <span>Integrated approach</span>
                  </div>
                  <div className={styles.credibilityItem}>
                    <strong>India-first MSME focus</strong>
                    <span>Deep local expertise</span>
                  </div>
                  <div className={styles.credibilityItem}>
                    <strong>Execution-led approach</strong>
                    <span>Results-driven delivery</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* What We Do - Services Preview */}
        <Section className="sectionWash">
          <div className="container">
            <Reveal variant="fadeUp">
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>What We Do</h2>
                <p className={styles.sectionSubtitle}>
                  Comprehensive financial and strategic advisory services 
                  designed to transform business operations into profitable, 
                  compliant, and sustainable systems.
                </p>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" stagger>
              <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                  <Card key={index} hover>
                    <div className={styles.serviceIcon}>
                      {service.icon}
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>{service.description}</p>
                  </Card>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200} variant="fadeUp">
              <div className={styles.servicesCTA}>
                <Button href="/services" variant="secondary" size="md">
                  View All Services →
                </Button>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Confidence Pause Section */}
        <Section variant="surface" className={styles.confidencePause}>
          <div className="container">
            <Reveal variant="fadeUp">
              <div className={styles.confidenceContent}>
                <p className={styles.confidenceText}>
                  Strategy without execution is merely planning.
                  <br />
                  Execution without strategy is just activity.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* How We Work - Enhanced Sticky Scrollytelling */}
        <Section variant="surface" className={`${styles.howWeWorkSection} sectionWash`}>
          <div className="container">
            <StickyScrollytelling steps={processSteps} />
          </div>
        </Section>

        {/* Impact Snapshots */}
        <Section className="sectionWash">
          <div className="container">
            <Reveal variant="fadeUp">
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Impact Snapshots</h2>
                <p className={styles.sectionSubtitle}>
                  Real outcomes from our strategic interventions across 
                  diverse business contexts.
                </p>
              </div>
            </Reveal>

            <div className={styles.impactGrid}>
              {impactSnapshots.map((snapshot, index) => (
                <Reveal key={index} delay={index * 100} variant="fadeUp">
                  <Card hover>
                    <div className={styles.impactScenario}>
                      <strong>{snapshot.scenario}</strong>
                    </div>
                    <div className={styles.impactIntervention}>
                      <strong>Intervention:</strong> {snapshot.intervention}
                    </div>
                    <div className={styles.impactOutcome}>
                      <strong>Outcome:</strong> {snapshot.outcome}
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* Founder's Note Section */}
        <Section variant="surface" className={`${styles.foundersNote} grain`}>
          <div className="container">
            <Reveal variant="fadeUp">
              <div className={styles.foundersContent}>
                <div className={styles.foundersLabel}>FOUNDER'S NOTE</div>
                <p className={styles.foundersText}>
                  Every business decision is a financial decision. 
                  We help you make them with clarity, confidence, and conviction.
                </p>
                <div className={styles.foundersSignature}>
                  <div className={styles.signatureLine}></div>
                  <div className={styles.signatureName}>Smarkitals Strategist LLP</div>
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Primary CTA Strip */}
        <Section variant="surface" className={styles.ctaSection}>
          <div className="container">
            <Reveal variant="fadeUp">
              <div className={styles.ctaContent}>
                <h2 className={styles.ctaTitle}>
                  Ready to Transform Your Business?
                </h2>
                <p className={styles.ctaSubtitle}>
                  Let's discuss how we can help you achieve your business goals 
                  with our comprehensive consulting services.
                </p>
                <Button href="/contact" variant="primary" size="md">
                  Get in Touch Today
                </Button>
              </div>
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

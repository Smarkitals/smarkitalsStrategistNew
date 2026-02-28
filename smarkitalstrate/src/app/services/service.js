'use client';

import Nav from "../nav/navbar";
import Footer from "../nav/footer";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import styles from "../css/services.module.css";
import "../globals.css";

export default function Services() {
  const services = [
    {
      title: "Business & Financial Advisory",
      whoFor: "Startups, MSMEs, and enterprises seeking financial clarity and control",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2"></rect>
          <path d="M9 22v-4h6v4"></path>
          <path d="M8 6h.01"></path>
          <path d="M16 6h.01"></path>
          <path d="M12 6h.01"></path>
          <path d="M12 10h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 10h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 10h.01"></path>
          <path d="M8 14h.01"></path>
        </svg>
      ),
      deliverables: [
        "Business Setup & Financial Structuring",
        "Budgeting, Forecasting & Financial Planning",
        "Cash Flow & Working Capital Optimization",
        "Cost Analysis & Profitability Improvement",
        "Fundraising & Investment Readiness",
        "Internal Control & Governance Design",
        "Virtual CFO & Controller Services"
      ]
    },
    {
      title: "Corporate Strategy & Performance Consulting",
      whoFor: "Growing businesses needing strategic direction and operational excellence",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2"></rect>
          <line x1="8" x2="16" y1="6" y2="6"></line>
          <line x1="16" x2="16" y1="14" y2="18"></line>
          <path d="M16 10h.01"></path>
          <path d="M12 10h.01"></path>
          <path d="M8 10h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M8 14h.01"></path>
          <path d="M12 18h.01"></path>
          <path d="M8 18h.01"></path>
        </svg>
      ),
      deliverables: [
        "Strategic Planning & Business Model Design",
        "KPI Frameworks & Performance Monitoring",
        "Process Improvement & Efficiency Programs",
        "Market Expansion & Feasibility Analysis",
        "Merger, Acquisition & Restructuring Strategy",
        "Profitability & Productivity Optimization"
      ]
    },
    {
      title: "Risk, Audit & Governance",
      whoFor: "Organizations requiring robust controls and compliance frameworks",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
        </svg>
      ),
      deliverables: [
        "Internal & Management Audits",
        "Financial Risk & Control Assessment",
        "SOP & Policy Framework Development",
        "Compliance & Governance Audits",
        "Risk Register & Mitigation Planning",
        "Management Reporting & Continuous Monitoring"
      ]
    },
    {
      title: "Policy & Regulatory Affairs",
      whoFor: "Businesses expanding operations and navigating regulatory complexity",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      ),
      deliverables: [
        "Government Relations & Licensing",
        "Policy Representation & Advocacy",
        "Legal Documentation & Compliance",
        "CSR, ESG & Sustainability Consulting",
        "Tender Management & Land Acquisition Support"
      ]
    },
    {
      title: "Startup & SME Advisory",
      whoFor: "Early-stage and growing businesses seeking strategic guidance",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
          <path d="M9 18h6"></path>
          <path d="M10 22h4"></path>
        </svg>
      ),
      deliverables: [
        "Business Plan Development",
        "Funding & Investment Advisory",
        "Market Entry Strategy",
        "Scaling Strategies",
        "Mentorship Programs"
      ]
    }
  ];

    return (
        <div className={styles.servicesAll}>
      <header className="nav">
            <Nav />
      </header>

      <main>
        <PageHeader 
          title="Our Services"
          subtitle="Smarkitals Strategist LLP offers holistic consulting across financial planning, business restructuring, and corporate governance. We focus on transforming business operations into profitable, compliant, and sustainable systems."
          highlight="Services"
        />

        <Section>
          <div className="container">
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <Reveal key={index} delay={index * 50}>
                  <Card hover className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>
                      {service.icon}
  </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceWhoFor}>
                      <strong>Who it's for:</strong> {service.whoFor}
                    </p>
                    <div className={styles.serviceDeliverables}>
                      <strong>Deliverables:</strong>
                      <ul className={styles.deliverablesList}>
                        {service.deliverables.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
            </ul>
        </div>
                    <div className={styles.serviceCTA}>
                      <Button href="/contact" variant="secondary" size="sm">
                        Talk to Us
                      </Button>
    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
        </div>
        </Section>

        <Section variant="accent">
          <div className="container">
            <Reveal>
              <div className={styles.ctaSection}>
                <h2 className={styles.ctaTitle}>Need a Custom Solution?</h2>
                <p className={styles.ctaSubtitle}>
                  Every business is unique. Let's discuss your specific needs and design 
                  a tailored approach that delivers measurable results.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  Discuss Your Needs
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

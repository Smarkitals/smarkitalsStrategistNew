'use client';

import Nav from "../nav/navbar";
import Footer from "../nav/footer";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import styles from "../css/about.module.css";
import "../globals.css";

export default function About() {
  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      title: "Mission",
      description: "To strengthen the financial and operational performance of every client through structured planning, analytical insights, and practical execution."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      title: "Vision",
      description: "To be India's most result-oriented financial strategy and business transformation partner."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      ),
      title: "Values",
      description: "Integrity, Excellence, Innovation, Client-centricity, and Collaborative partnerships form the foundation of everything we do."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
          <circle cx="12" cy="8" r="6"></circle>
        </svg>
      ),
      title: "Commitment",
      description: "Delivering exceptional results through expertise, dedication, and unwavering commitment to our clients' success."
    }
  ];

  return (
        <div className={styles.aboutAll}>
      <header className="nav">
            <Nav />
      </header>

      <main>
        <PageHeader 
          title="About Smarkitals Strategist LLP"
          subtitle="Part of the Smarkitals Group of Companies, we are dedicated to providing world-class financial and management consulting services."
          highlight="Smarkitals Strategist LLP"
        />

        {/* Who We Are */}
        <Section>
          <div className="container">
            <Reveal>
              <div className={styles.sectionHeader}>
                <h2>Who We Are</h2>
  </div>
            </Reveal>

            <div className={styles.whoContent}>
              <Reveal>
                <div className={styles.whoText}>
                  <p>
                    Smarkitals Strategist LLP is a leading business and financial advisory firm in India, 
                    guided by Mr. Manish Kulshrestha and Mr. Sanket Kulshrestha. We work with ambitious 
                    organizations to strengthen their financial systems, design actionable strategies, and 
                    drive measurable growth. Our advisory integrates financial planning, strategic management, 
                    and audit readiness ensuring that every business decision aligns with profitability and compliance.
                  </p>
                  <p>
                    Our team of seasoned professionals brings together diverse expertise in finance, taxation, 
                    compliance, business strategy, and management consulting. We work closely with our clients 
                    to understand their unique challenges and develop tailored solutions that drive measurable results.
                  </p>
                  <p>
                    From startups to established enterprises, we have helped countless businesses navigate 
                    complex regulatory environments, optimize their operations, and achieve sustainable growth 
                    in today's dynamic marketplace.
                  </p>
        </div>
              </Reveal>

              <Reveal delay={100}>
                <Card className={styles.expertiseCard}>
                <h3>Our Expertise</h3>
                  <ul className={styles.expertiseList}>
                    <li>
                      <strong>Business & Financial Advisory</strong> – Data-driven financial strategies for MSMEs, startups, and enterprises.
                    </li>
                    <li>
                      <strong>Corporate Strategy & Performance Consulting</strong> – Growth planning, restructuring, and performance optimization.
                    </li>
                    <li>
                      <strong>Risk, Audit & Governance</strong> – Internal audit, process control, and risk mitigation frameworks.
</li>
                    <li>
                      <strong>Policy & Regulatory Affairs</strong> – Legal, policy, and government relations advisory for expanding businesses.
</li>
                </ul>
                </Card>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* Our Foundation */}
        <Section variant="surface">
          <div className="container">
            <Reveal>
              <div className={styles.sectionHeader}>
                <h2>Our <span className={styles.highlight}>Foundation</span></h2>
                <p className={styles.sectionSubtitle}>
                  Built on strong principles that guide every decision we make and every service we provide.
                </p>
              </div>
            </Reveal>

            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <Reveal key={index} delay={index * 50}>
                  <Card hover>
                    <div className={styles.valueIcon}>
                      {value.icon}
        </div>
                    <h3 className={styles.valueTitle}>{value.title}</h3>
                    <p className={styles.valueDescription}>{value.description}</p>
                  </Card>
                </Reveal>
              ))}
    </div>
</div>
        </Section>

        {/* Our Leadership */}
        <Section>
          <div className="container">
            <Reveal>
              <div className={styles.sectionHeader}>
                <h2>Our <span className={styles.highlight}>Leadership</span></h2>
</div>
            </Reveal>

            <div className={styles.leadershipGrid}>
              <Reveal>
                <Card className={styles.leaderCard}>
                  <h3>Manish Kulshrestha</h3>
                  <h4>Group Founder & Chief Strategist – Smarkitals Group | Partner – Smarkitals Strategist LLP</h4>
                  <p>
                    With over 35 years of high-impact experience in finance, taxation, and business planning, 
                    Manish Kulshrestha has advised and led initiatives across a remarkable spectrum of industries 
                    and organisations. His career has included senior roles in renowned firms such as the Apeejay 
                    Stya Group, Ananta Raj Industries, Aggarwal Packers & Movers, Fusion Buildtech and many more.
                  </p>
                  <p>
                    In each engagement, he demonstrated a consistent ability to translate complex financial and 
                    regulatory landscapes into structured, growth-oriented solutions. From business setups and capital 
                    structuring to tax planning and risk mitigation, his expertise spans the full lifecycle of 
                    enterprise growth: inception, scaling, governance, and audit-ready maturity.
                  </p>
                  <p>
                    At Smarkitals Strategist LLP, he leads the Business & Financial Advisory vertical. He guides 
                    startups, MSMEs and rapidly growing firms in establishing disciplined financial systems, robust 
                    internal controls, and clear strategic direction ensuring the foundations of their businesses 
                    are both compliant and growth-driven. His deep domain experience across manufacturing, logistics, 
                    real estate, services and other sectors gives him the uncommon ability to connect financial 
                    strategy with operational reality.
                  </p>
                </Card>
              </Reveal>

              <Reveal delay={100}>
                <Card className={styles.leaderCard}>
                  <h3>Sanket Kulshrestha</h3>
                  <h4>Co-Founder & Managing Partner – Smarkitals Strategist LLP | Founder & CEO – Smarkitals Technologies India Pvt. Ltd.</h4>
                  <p>
                    Sanket Kulshrestha represents the convergence of finance, audit and technology in the modern 
                    advisory landscape. Before co-founding Smarkitals Strategist LLP, his career trajectory includes 
                    roles at the Samvardhana Motherson Group, Reliance Brands Ltd. and a professional tenure with Deloitte. 
                    This background equipped him with rigorous audit discipline, enterprise-grade analytics experience 
                    and a strategic mindset attuned to large-scale business challenges.
                  </p>
                  <p>
                    At Smarkitals Strategist LLP, Sanket drives the firm's consulting and tech-enabled advisory services 
                    ensuring that financial strategy isn't just well-formulated but also operationalised through digital 
                    tools, process automation and data-driven insights. His leadership spans internal audit analytics, 
                    ERP-driven work-order and maintenance metrics, cost-leakage identification and working-capital optimisation. 
                    He effectively bridges the world of big-corporate discipline with the agile needs of startups and high-growth SMEs.
                  </p>
                  <p>
                    Under Sanket's guidance, Smarkitals Strategist is positioned not just as a financial advisory firm, 
                    but as a strategic ecosystem where finance, governance and technology meet to build future-ready enterprises.
                  </p>
                </Card>
              </Reveal>
    </div>
</div>
        </Section>

        {/* Advisory Philosophy */}
        <Section variant="accent">
          <div className="container">
            <Reveal>
              <div className={styles.sectionHeader}>
                <h2>Our <span className={styles.highlight}>Advisory Philosophy</span></h2>
                <p className={styles.sectionSubtitle}>
                  We believe financial strategy is not paperwork—it's a roadmap for growth. Every engagement begins 
                  with data, develops into strategy, and ends with measurable business outcomes.
                </p>
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

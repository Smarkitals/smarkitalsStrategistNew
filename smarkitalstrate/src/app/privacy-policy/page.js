import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import Container from "../components/Container";

export const metadata = {
  title: "Privacy Policy | Smarkitals",
  description: "Privacy Policy of Smarkitals Strategist LLP outlining how we collect, use, store, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How Smarkitals Strategist LLP collects, uses, and protects your information."
      />

      <Section variant="surface">
        <Container>
          <article>
            <header>
              <p><strong>Smarkitals Strategist LLP</strong></p>
              <p><strong>Last Updated:</strong> 31-jan-2026</p>
              <p>
                Smarkitals Strategist LLP (“Smarkitals”, “we”, “our”, or “us”) respects the privacy of our clients, users, and visitors.
                This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our services,
                website, or communication channels.
              </p>
              <p>
                By accessing our services or website, you agree to the practices described in this policy.
              </p>
            </header>

            <section>
              <h2>1. Information We Collect</h2>

              <h3>Personal Information</h3>
              <ul>
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Business details</li>
                <li>Address</li>
                <li>
                  PAN, GSTIN or other statutory identification details (where required for services)
                </li>
              </ul>

              <h3>Financial and Compliance Information</h3>
              <p>When providing advisory, tax, or compliance services, we may collect:</p>
              <ul>
                <li>Financial statements</li>
                <li>Income details</li>
                <li>Tax related documents</li>
                <li>GST filings and records</li>
                <li>Bank account information (when necessary for advisory purposes)</li>
              </ul>

              <h3>Technical Information</h3>
              <p>When visiting our website or using our digital platforms, we may collect:</p>
              <ul>
                <li>IP address</li>
                <li>Device information</li>
                <li>Browser type</li>
                <li>Website usage data</li>
                <li>Cookies and analytics information</li>
              </ul>
            </section>

            <section>
              <h2>2. How We Use Your Information</h2>
              <p>The information collected may be used for the following purposes:</p>
              <ul>
                <li>Providing professional advisory services</li>
                <li>Taxation, compliance, and financial consulting</li>
                <li>Communication regarding assignments or projects</li>
                <li>Client onboarding and verification</li>
                <li>Improving our services and website functionality</li>
                <li>Compliance with legal and regulatory requirements</li>
              </ul>
              <p>We only collect information that is necessary to provide our services effectively.</p>
            </section>

            <section>
              <h2>3. Confidentiality of Client Information</h2>
              <p>
                As a professional advisory firm, Smarkitals Strategist LLP maintains strict confidentiality standards.
              </p>
              <p>
                All client data and documents shared with us are treated as confidential and are used solely for the purpose
                of providing services unless disclosure is required by law.
              </p>
            </section>

            <section>
              <h2>4. Sharing of Information</h2>
              <p>We do not sell, trade, or rent personal information.</p>
              <p>Information may only be shared in the following situations:</p>
              <ul>
                <li>With government authorities where legally required</li>
                <li>With regulatory bodies or statutory authorities</li>
                <li>
                  With professional associates, consultants, or technology providers assisting in service
                  delivery under confidentiality obligations
                </li>
              </ul>
            </section>

            <section>
              <h2>5. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect your information from
                unauthorized access, disclosure, or misuse.
              </p>
              <p>
                However, no digital transmission or storage system can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2>6. Data Retention</h2>
              <p>Client information and documents may be retained for the duration required:</p>
              <ul>
                <li>To provide services</li>
                <li>To comply with legal or regulatory obligations</li>
                <li>For record keeping purposes</li>
              </ul>
              <p>After this period, data may be securely deleted or archived.</p>
            </section>

            <section>
              <h2>7. Cookies and Website Analytics</h2>
              <p>
                Our website may use cookies and analytics tools to understand user behavior and improve the website experience.
              </p>
              <p>Users can disable cookies through their browser settings.</p>
            </section>

            <section>
              <h2>8. Third Party Services</h2>
              <p>
                Our website or services may contain links to third-party platforms or tools. Smarkitals Strategist LLP is not
                responsible for the privacy practices of such external services.
              </p>
              <p>Users are advised to review the privacy policies of those platforms separately.</p>
            </section>

            <section>
              <h2>9. Your Rights</h2>
              <p>Depending on applicable laws, users may have the right to:</p>
              <ul>
                <li>Request access to their personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of certain data where applicable</li>
              </ul>
              <p>Requests can be made through the contact details provided below.</p>
            </section>

            <section>
              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                Smarkitals Strategist LLP reserves the right to modify or update this Privacy Policy at any time. Updates will
                be reflected on this page with the revised date.
              </p>
            </section>

            <section>
              <h2>11. Contact Information</h2>
              <p><strong>Smarkitals Strategist LLP</strong></p>
              <p>
                UNIT A908, ROYAL GARDEN
                <br />
                SHALIMAR CITY, GHAZIABAD
                <br />
                UTTAR PRADESH – 201005
                <br />
                India
              </p>
              <p>
                Email: <span>[info@smarkitals.com]</span>
                <br />
                Phone: <span>+91-9891894129</span>
              </p>
            </section>
          </article>
        </Container>
      </Section>
    </>
  );
}


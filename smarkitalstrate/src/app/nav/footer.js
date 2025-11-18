'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from "../css/nav.module.css";

export default function Footer(){

     const router = useRouter();
//   const [activeTab, setActiveTab] = useState('home');

  const handleClick = (path) => () => {
    // setActiveTab(tab);
    router.push(path);
  };


    return (
        <div className={styles.footer}>
            <div className={styles.footerUpper}>
                <div className={styles.footerUpperAbout} >
                    <h2>Smarkitals Strategist LLP</h2>
                    <p>Part of Smarkitals Group of Companies, we provide comprehensive financial and management consulting services to help businesses grow and succeed.</p>
                    <div className={styles.footerUpperAboutIcons}>
                      <a href='https://www.linkedin.com/company/smarkitals-strategist-llp/about/?viewAsMember=true ' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin h-6 w-6" data-lov-id="src/components/Footer.tsx:20:16" data-lov-name="Linkedin" data-component-path="src/components/Footer.tsx" data-component-line="20" data-component-file="Footer.tsx" data-component-name="Linkedin" data-component-content="%7B%22className%22%3A%22h-6%20w-6%22%7D"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>

                      {/* <a href=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter h-6 w-6" data-lov-id="src/components/Footer.tsx:23:16" data-lov-name="Twitter" data-component-path="src/components/Footer.tsx" data-component-line="23" data-component-file="Footer.tsx" data-component-name="Twitter" data-component-content="%7B%22className%22%3A%22h-6%20w-6%22%7D"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      </a>

                      <a href=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook h-6 w-6" data-lov-id="src/components/Footer.tsx:26:16" data-lov-name="Facebook" data-component-path="src/components/Footer.tsx" data-component-line="26" data-component-file="Footer.tsx" data-component-name="Facebook" data-component-content="%7B%22className%22%3A%22h-6%20w-6%22%7D"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a> */}

                    </div>
                </div>
                <div className={styles.footerUpperLinks} >
                    <h3>Quick Links</h3>
<div className={styles.navOptions2}>
        <h4
          style={{ cursor: 'pointer' }}
          onClick={handleClick('/')}
        >
          Home
        </h4>
        <h4
          style={{ cursor: 'pointer' }}
          onClick={handleClick('/about')}
        >
          About Us
        </h4>
        <h4
          style={{ cursor: 'pointer' }}
          onClick={handleClick('/services')}
        >
          Services
        </h4>
        <h4
          style={{ cursor: 'pointer' }}
          onClick={handleClick('/why-choose-us')}
        >
          Why Choose Us
        </h4>
        <h4
          style={{ cursor: 'pointer' }}
          onClick={handleClick('/contact')}
        >
          Contact
        </h4>
      </div>


                </div>
                <div className={styles.footerUpperContact} >
                    <h3>Contact Info</h3>
                    <div className={styles.footerUpperContactDetails}>
                        <h4>
                            +91-9891894129

                        </h4>
                        <h4>
                        +91-7678255626
                        </h4>

                        <h4>
                             <a href="mailto:info@smarkitals.com">Info@smarkitals.in</a>
                        </h4>
                       <h4>
  <a
    href="https://www.google.com/maps/search/?api=1&query=Unit-A908+Royal+Garden+Shalimar+City+Ghaziabad+Uttar+Pradesh+India-201005"
    target="_blank"
    rel="noopener noreferrer"
  >
    Unit-A908 Royal Garden Shalimar City<br />
    Ghaziabad Uttar Pradesh<br />
    India-201005
  </a>
</h4>

                    </div>
                </div>
            </div>
            <br />
            <hr className={styles.Hr} />
            <br />
            <div className={styles.footerLower}>

                <h4>&copy; 2025 Smarkitals Strategist LLP. All Rights Reserved.
                  <br></br>
                  India’s Trusted Business & Financial Strategy Consulting Firm
<br></br>
  </h4>
  <p style={{'display':'flex','flexDirection':'row','gap':'10px'}} >
 <p
          style={{ cursor: 'pointer' }}
          onClick={handleClick('/')}
        >
          Home
        </p>
        |
        <p
          style={{ cursor: 'pointer' }}
          onClick={handleClick('/about')}
        >
          About Us
        </p>
        |
        <p
          style={{ cursor: 'pointer' }}
          onClick={handleClick('/services')}
        >
          Services
        </p>
        |
        <p
          style={{ cursor: 'pointer' }}
          onClick={handleClick('/why-choose-us')}
        >
          Why Choose Us
        </p>
        |
        <p
          style={{ cursor: 'pointer' }}
          onClick={handleClick('/contact')}
        >
          Contact
        </p>
        </p>

              

            </div>
        </div>
    )
}
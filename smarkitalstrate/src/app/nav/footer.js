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

                    </div>
                </div>
                <div className={styles.footerUpperLinks} >
                    <h3>Quick Links</h3>
<div className={styles.navOptions2}>
        <h4
          
          onClick={handleClick('/')}
        >
          Home
        </h4>
        <h4
          
          onClick={handleClick('/about')}
        >
          About Us
        </h4>
        <h4
          
          onClick={handleClick('/services')}
        >
          Services
        </h4>
        <h4
          
          onClick={handleClick('/why-choose-us')}
        >
          Why Choose Us
        </h4>
        <h4
          
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

                <h4>&copy; 2024 Smarkitals Strategist LLP. All rights reserved. Part of Smarkitals Group of Companies.</h4>

            </div>
        </div>
    )
}
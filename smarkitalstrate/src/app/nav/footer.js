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
                            +1 (555) 123-4567
                        </h4>
                        <h4>
                            info@smarkitals.com
                        </h4>
                        <h4>
                            123 Business District
New York, NY 10001
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
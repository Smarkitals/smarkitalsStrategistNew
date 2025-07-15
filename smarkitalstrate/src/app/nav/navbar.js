'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from "../css/nav.module.css";

export default function Nav() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);


  useEffect(() => {
    const href = window.location.href;
    const val = href.split('/');
    console.log(val);
    if (val.length > 1) {
      setActiveTab(val[3] || ''); // assuming val[3] holds the route (for `/about`, `/services`, etc.)
    }
  }, []);

  const handleClick = (path) => () => {
    setActiveTab(path);
    router.push('/'+path);
  };

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img src="" alt="Smarkitals Strategist LLP" />
      </div>

      <div className={styles.navOptions}>
        <h4
          className={activeTab === '' ? styles.navActive : ''}
          onClick={handleClick('')}
        >
          Home
        </h4>
        <h4
          className={activeTab === 'about' ? styles.navActive : ''}
          onClick={handleClick('about')}
        >
          About Us
        </h4>
        <h4
          className={activeTab === 'services' ? styles.navActive : ''}
          onClick={handleClick('services')}
        >
          Services
        </h4>
        <h4
          className={activeTab === 'why-choose-us' ? styles.navActive : ''}
          onClick={handleClick('why-choose-us')}
        >
          Why Choose Us
        </h4>
        <h4
          className={activeTab === 'contact' ? styles.navActive : ''}
          onClick={handleClick('contact')}
        >
          Contact
        </h4>
      </div>


  <div className={styles.hamburger} onClick={() => setShowMobileMenu(prev => !prev)}>
      ☰
    </div>


 {showMobileMenu && (
      <div className={styles.navOptionsMobile}>
        <h4
          className={activeTab === '' ? styles.navActive : ''}
          onClick={handleClick('')}
        >
          Home
        </h4>
        <h4
          className={activeTab === 'about' ? styles.navActive : ''}
          onClick={handleClick('about')}
        >
          About Us
        </h4>
        <h4
          className={activeTab === 'services' ? styles.navActive : ''}
          onClick={handleClick('services')}
        >
          Services
        </h4>
        <h4
          className={activeTab === 'why-choose-us' ? styles.navActive : ''}
          onClick={handleClick('why-choose-us')}
        >
          Why Choose Us
        </h4>
        <h4
          className={activeTab === 'contact' ? styles.navActive : ''}
          onClick={handleClick('contact')}
        >
          Contact
        </h4>
      </div>
 )}

      <div className={styles.navbuttonDiv}>
        <button className={styles.navbutton}>Get Started</button>
      </div>
    </div>
  );
}

'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from "../css/nav.module.css";
import Image from "next/image";
import Button from "../components/Button";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Determine active tab from pathname
  const getActivePath = () => {
    if (pathname === '/') return '';
    return pathname.replace('/', '');
  };

  const activeTab = getActivePath();

  const handleClick = (path) => () => {
    setShowMobileMenu(false);
    router.push(path === '' ? '/' : `/${path}`);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(prev => !prev);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showMobileMenu) {
        setShowMobileMenu(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [showMobileMenu]);

  const navLinks = [
    { path: '', label: 'Home' },
    { path: 'about', label: 'About Us' },
    { path: 'services', label: 'Services' },
    { path: 'why-choose-us', label: 'Why Choose Us' },
    { path: 'contact', label: 'Contact' },
  ];

  return (
    <header className={styles.nav}>
      <nav className={styles.navContainer} aria-label="Main navigation">
        <div className={styles.logo}>
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); handleClick('')(); }}
            aria-label="Smarkitals Strategist LLP Home"
          >
            <Image 
              src="/logo.png" 
              alt="Smarkitals Strategist LLP" 
              width={150}
              height={90}
              priority
            />
          </a>
        </div>

        <div className={styles.navOptions} role="list">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path === '' ? '/' : `/${link.path}`}
              onClick={handleClick(link.path)}
              className={`${styles.navLink} ${activeTab === link.path ? styles.navActive : ''}`}
              role="listitem"
              aria-current={activeTab === link.path ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.navButtonDiv}>
          <Button 
            href="/contact" 
            variant="primary" 
            size="md"
            onClick={handleClick('contact')}
          >
            Book a Call
          </Button>
        </div>

        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label={showMobileMenu ? 'Close menu' : 'Open menu'}
          aria-expanded={showMobileMenu}
          aria-controls="mobile-menu"
        >
          <span className={styles.hamburgerIcon}>
            {showMobileMenu ? '✕' : '☰'}
          </span>
        </button>
      </nav>

      {showMobileMenu && (
        <div 
          id="mobile-menu"
          className={styles.navOptionsMobile}
          role="menu"
          aria-label="Mobile navigation menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path === '' ? '/' : `/${link.path}`}
              onClick={handleClick(link.path)}
              className={`${styles.navLinkMobile} ${activeTab === link.path ? styles.navActive : ''}`}
              role="menuitem"
              aria-current={activeTab === link.path ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
          <div className={styles.mobileCTA}>
            <Button 
              href="/contact" 
              variant="primary" 
              size="md"
              onClick={handleClick('contact')}
            >
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

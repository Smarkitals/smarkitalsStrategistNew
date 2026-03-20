'use client';

import { useState } from 'react';
import styles from "../css/contact.module.css";
import Button from "../components/Button";

const WHATSAPP_URL =
  'https://wa.me/919310624966?text=Hi%20Smarkitals%20Team%2C%20I%20need%20consultation%20for%20my%20business.';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const trackEvent = (eventName) => {
    if (typeof window === 'undefined') return;
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName);
      } else if (window.dataLayer && typeof window.dataLayer.push === 'function') {
        window.dataLayer.push({ event: eventName });
      }
    } catch {
      // No-op
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      trackEvent('form_submit');

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        trackEvent('form_success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label htmlFor="lead-fullName">
            Full Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="lead-fullName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
            autoComplete="name"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">
            Email Address <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            autoComplete="email"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">
            Phone Number <span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            aria-required="true"
            onKeyDown={(e) => {
              const allowedKeys = [
                'Backspace',
                'ArrowLeft',
                'ArrowRight',
                'Tab',
                'Delete',
              ];
              
              if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
                e.preventDefault();
              }
            }}
            placeholder="Enter phone number"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Message (optional)</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message (optional)"
          rows="5"
        />
      </div>

      {submitStatus === 'success' && (
        <div className={styles.formSuccess} role="alert">
          <div>Thank you. Our team will contact you shortly.</div>
          <div className={styles.continueActions}>
            <a
              className={styles.continueWhatsApp}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue on WhatsApp
            </a>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.formError} role="alert">
          Sorry, there was an error sending your message. Please try again or contact us directly.
        </div>
      )}

      {submitStatus !== 'success' && (
        <>
          <div className={styles.formActions}>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
          </div>

          <p className={styles.agreementText}>
            By submitting this form, you agree to be contacted by Smarkitals Strategist LLP.
          </p>
        </>
      )}
    </form>
  );
};

export default ContactForm;

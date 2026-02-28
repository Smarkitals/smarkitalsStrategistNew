'use client';

import { useState } from 'react';
import styles from "../css/contact.module.css";
import Button from "../components/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Business & Financial Advisory',
    'Corporate Strategy & Performance Consulting',
    'Risk, Audit & Governance',
    'Policy & Regulatory Affairs',
    'Startup & SME Advisory',
    'Custom Solutions',
  ];

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
      const res = await fetch('/api/contactForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
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
          <label htmlFor="fullName">
            Full Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            aria-required="true"
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
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="service">
          Service of Interest <span className={styles.required}>*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          aria-required="true"
        >
          <option value="" disabled hidden>Select Service</option>
          {services.map((service, idx) => (
            <option key={idx} value={service}>{service}</option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">
          Message <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          aria-required="true"
          rows="5"
        ></textarea>
      </div>

      {submitStatus === 'success' && (
        <div className={styles.formSuccess} role="alert">
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.formError} role="alert">
          Sorry, there was an error sending your message. Please try again or contact us directly.
        </div>
      )}

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
    </form>
  );
};

export default ContactForm;

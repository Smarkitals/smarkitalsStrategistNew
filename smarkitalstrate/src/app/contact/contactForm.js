
import { useState } from 'react';
import styles from "../css/contact.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const services = [
    'Taxation & Compliance',
    'Accounting & Outsourcing',
    'Management Consulting',
    'Startup & SME Advisory',
    'Custom Solutions',
    'Business Registration & Licensing',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
   const res = await fetch('/api/contactForm', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});

    if (res.ok) {
      alert('Form submitted successfully!');
    } else {
      alert('Failed to submit form.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactMainCentreLeftContactForm}>
    <div className={styles.contactMainCentreLeftContactFormGrid} >
<label htmlFor="fname">
    Full Name
      <input type="text" name="fullName" required onChange={handleChange} />
</label>
<label htmlFor="email">
    Email Address
      <input type="email" name="email" required onChange={handleChange} />
</label>
<label htmlFor="phoneNumber">
    Phone Number
      <input type="tel" name="phone" required onChange={handleChange} />
</label>
<label htmlFor="cname">
    Company Name
      <input type="text" name="company" onChange={handleChange} />
</label>
    </div>

<label htmlFor="Service">Service of Interest

      <select name="service" required onChange={handleChange}>
        <option disabled value="">Select Service</option>
        {services.map((service, idx) => (
          <option key={idx} value={service}>{service}</option>
        ))}
      </select>
</label>

<label htmlFor="message">
    Message
      <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
</label>


      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

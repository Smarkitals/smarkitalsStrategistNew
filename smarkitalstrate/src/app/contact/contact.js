'use client';

import { useRouter } from 'next/navigation';
import Image from "next/image";
import Nav from "../nav/navbar";
import Footer from "../nav/footer";
import ContactForm from './contactForm';
import styles from "../css/contact.module.css";
import "../globals.css";

export default function Contact(){

       const router = useRouter();
    const handleClick = (path) => () => {
    router.push(path);
  };


    return(
 <div className={styles.contactAll}>

                  <div className="nav">
            <Nav />
                  </div >


  <div className={styles.contactMain}>

    <div className={styles.contactBanner} >

  <div className={styles.contactBannerHeading} >

  <h2><span>

  Get in&nbsp;
  </span>
   <span className={styles.contactBannerHeadingBlue}>Touch
    </span>
   </h2>
  </div>

  <p>Ready to take your business to the next level? Our advisors specialize in helping MSMEs and corporates strengthen financial planning, governance, and strategic execution.
</p>




</div>

<div className={styles.contactMainCentre}>
        <div className={styles.contactMainCentreLeft}>
            <h5>
                Send us a Message
            </h5>
            <div>
              <ContactForm />
             

            </div>
        </div>
        <div className={styles.contactMainCentreRight}>
            <h5>
                Contact Information
            </h5>
            <div className={styles.contactMainCards}>
                   <div className={styles.aboutCard} >
        <div className={styles.aboutCardImg} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone h-6 w-6 text-brand-blue-600" data-lov-id="src/pages/Contact.tsx:187:24" data-lov-name="info.icon" data-component-path="src/pages/Contact.tsx" data-component-line="187" data-component-file="Contact.tsx" data-component-name="info.icon" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-brand-blue-600%22%7D"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <div>
            <h4>
              <strong>
                Phone
                </strong>  
            </h4>
            <p>
            <a
    href="https://wa.me/919891894129"
    target="_blank"
    rel="noopener noreferrer"
  > +91-9891894129
  </a>

  </p>
            <p> 
               <a
    href="https://wa.me/917678255626"
    target="_blank"
    rel="noopener noreferrer"
  >
+91-7678255626
  </a>


            </p>
            <p>Call us during business hours</p>
        </div>

    </div>

     <div className={styles.aboutCard} >
        <div className={styles.aboutCardImg} >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail h-6 w-6 text-brand-blue-600" data-lov-id="src/pages/Contact.tsx:187:24" data-lov-name="info.icon" data-component-path="src/pages/Contact.tsx" data-component-line="187" data-component-file="Contact.tsx" data-component-name="info.icon" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-brand-blue-600%22%7D"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
        </div>
        <div>
            <h4>
              <strong>
                Email
                </strong>  
            </h4>
            <p>
                <a href="mailto:info@smarkitals.com">
                  info@smarkitals.com
                  </a>
            </p>
           
            <p>
              <a href="mailto:info@smarkitals.com" style={{'color':'#0090ff'}}>
Send email
              </a></p>
        </div>

    </div>

     <div className={styles.aboutCard} >
        <div className={styles.aboutCardImg} >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin h-6 w-6 text-brand-blue-600" data-lov-id="src/pages/Contact.tsx:187:24" data-lov-name="info.icon" data-component-path="src/pages/Contact.tsx" data-component-line="187" data-component-file="Contact.tsx" data-component-name="info.icon" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-brand-blue-600%22%7D"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
        </div>
        <div>
            <h4>
              <strong>
                Address
                </strong>  
            </h4>
            <h4>
  <a
    href="https://maps.app.goo.gl/vJDq5URdq1QHAuta8"
    target="_blank"
    rel="noopener noreferrer"
  >
    Unit-A908 Royal Garden Shalimar City<br />
    Ghaziabad Uttar Pradesh<br />
    India-201005
  </a>
</h4>

            <p>  <a style={{'color':'#0090ff'}}
    href="https://maps.app.goo.gl/vJDq5URdq1QHAuta8"
    target="_blank"
    rel="noopener noreferrer" 
  >
              Visit our office  </a>
              </p>
        </div>

    </div>

     <div className={styles.aboutCard} >
        <div className={styles.aboutCardImg} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-6 w-6 text-brand-blue-600" data-lov-id="src/pages/Contact.tsx:187:24" data-lov-name="info.icon" data-component-path="src/pages/Contact.tsx" data-component-line="187" data-component-file="Contact.tsx" data-component-name="info.icon" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-brand-blue-600%22%7D"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </div>
        <div>
            <h4>
              <strong>
                Hours
                </strong>  
            </h4>
            <p>
              Mon - Fri: 9:00 AM - 6:00 PM


            </p>
            <p> 
Sat: 10:00 AM - 2:00 PM
            </p>
            <p>Our business hours</p>
        </div>

    </div>

            </div>
        </div>


</div>







<div className={styles.getTouch} >

    <h3>
      Ready to Transform Your Business?
    </h3>

    <p style={{"margin-bottom":'0'}} >Let's discuss how we can help you achieve your business goals with our comprehensive consulting services.</p>

    {/* <div className={styles.getouchButton}>

    <button onClick={handleClick('/contact')} >
      Get in Touch Today &rarr;
    </button>
    <button onClick={handleClick('/contact')} >
      Download Brochure &rarr;
    </button>
    </div> */}


</div>



  </div>



                      <div className="footer">
                                    <Footer />
                                          </div>
                      </div>

    )
}
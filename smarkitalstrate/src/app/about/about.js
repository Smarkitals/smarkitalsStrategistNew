'use client';

import { useRouter } from 'next/navigation';
import Image from "next/image";
import Nav from "../nav/navbar";
import Footer from "../nav/footer";
import styles from "../css/about.module.css";
import "../globals.css";

export default function About(){

    return(
        <div className={styles.aboutAll}>
            
                  <div className="nav">
            <Nav />
                  </div >
   <div className={styles.aboutMain}>

<div className={styles.aboutMainBanner} >

  <div className={styles.aboutMainBannerHeading} >

  <h2><span>

   About&nbsp;
  </span>
   <span className={styles.aboutMainBannerHeadingBlue}>Smarkitals Strategist LLP
    </span>
   </h2>
  </div>

  <p>Part of the prestigious Smarkitals Group of Companies, we are dedicated to providing world-class financial and management consulting services.</p>




</div>


<div className={styles.who}>
    <h3>Who We Are</h3>
    <div className={styles.whoFlex} >
        <div>
            <p>Smarkitals Strategist LLP is a premier financial and management consulting firm that serves as a cornerstone of the Smarkitals Group of Companies. With years of combined expertise, we have established ourselves as trusted partners for businesses seeking comprehensive solutions for growth and success.
</p>
<br />
            <p>Our team of seasoned professionals brings together diverse expertise in finance, taxation, compliance, business strategy, and management consulting. We work closely with our clients to understand their unique challenges and develop tailored solutions that drive measurable results.
</p>
<br />
            <p>From startups to established enterprises, we have helped countless businesses navigate complex regulatory environments, optimize their operations, and achieve sustainable growth in today's dynamic marketplace.</p>
        </div>
        <div className={styles.whoRight}>
            <div className={styles.whoRightBox}>
                <h3>Our Expertise</h3>
                <ul>
                    <li>Business Registration & Licensing</li>
                    <li>Taxation & Compliance Services</li>
                    <li>Accounting & Outsourcing Solutions</li>
                    <li>Strategic Management Consulting</li>
                    <li>Startup & SME Advisory Services</li>
                </ul>
            </div>

        </div>
    </div>
</div>


<div className={styles.foundation} >

    <h3>
      Our Foundation
    </h3>


    <p>Built on strong principles that guide every decision we make and every service we provide.</p>


</div>

<div className={styles.aboutCards}>
    <div className={styles.aboutCard} >
        <div className={styles.aboutCardImg} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target h-6 w-6 text-brand-blue-600" data-lov-id="src/pages/About.tsx:115:22" data-lov-name="value.icon" data-component-path="src/pages/About.tsx" data-component-line="115" data-component-file="About.tsx" data-component-name="value.icon" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-brand-blue-600%22%7D"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
        </div>
        <div>
            <h4>
              <strong>
                Mission
                </strong>  
            </h4>
            <p>
                To empower businesses with strategic financial and management solutions that drive sustainable growth and success.
            </p>
        </div>

    </div>
     <div className={styles.aboutCard} >
        <div className={styles.aboutCardImg} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye h-6 w-6 text-brand-blue-600" data-lov-id="src/pages/About.tsx:115:22" data-lov-name="value.icon" data-component-path="src/pages/About.tsx" data-component-line="115" data-component-file="About.tsx" data-component-name="value.icon" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-brand-blue-600%22%7D"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
        </div>
        <div>
            <h4>
              <strong>
                Vision
                </strong>  
            </h4>
            <p>
                To be the leading consulting firm that transforms businesses and creates lasting value for our clients and communities.
            </p>
        </div>

    </div>
     <div className={styles.aboutCard} >
        <div className={styles.aboutCardImg} >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-6 w-6 text-brand-blue-600" data-lov-id="src/pages/About.tsx:115:22" data-lov-name="value.icon" data-component-path="src/pages/About.tsx" data-component-line="115" data-component-file="About.tsx" data-component-name="value.icon" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-brand-blue-600%22%7D"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        </div>
        <div>
            <h4>
              <strong>
                Values
                </strong>  
            </h4>
            <p>
                Integrity, Excellence, Innovation, Client-centricity, and Collaborative partnerships form the foundation of everything we do.
            </p>
        </div>

    </div>
     <div className={styles.aboutCard} >
        <div className={styles.aboutCardImg} >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award h-6 w-6 text-brand-blue-600" data-lov-id="src/pages/About.tsx:115:22" data-lov-name="value.icon" data-component-path="src/pages/About.tsx" data-component-line="115" data-component-file="About.tsx" data-component-name="value.icon" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-brand-blue-600%22%7D"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
        </div>
        <div>
            <h4>
              <strong>
                Commitment
                </strong>  
            </h4>
            <p>
                Delivering exceptional results through expertise, dedication, and unwavering commitment to our clients' success.
            </p>
        </div>

    </div>

</div>




<div className={styles.partOf} >

    <h3>
     <span>Part of&nbsp;</span><span className={styles.partOfBlue}  >Smarkitals Group</span>
    </h3>


    <p>As a member of the Smarkitals Group of Companies, we leverage collective expertise and resources to provide comprehensive solutions that address all aspects of business growth and development.</p>


</div>


<div className={styles.strength} >
    <div className={styles.strengthBox}>

    <h3>
     Strength in Unity
    </h3>


    <p>Our affiliation with the Smarkitals Group enables us to offer integrated services across multiple domains, ensuring that our clients receive holistic solutions that drive sustainable success. Together, we represent a powerhouse of expertise, innovation, and commitment to excellence.</p>

    </div>



</div>




      </div>


  <div className="footer">
<Footer />
      </div>



        </div>
    );
}
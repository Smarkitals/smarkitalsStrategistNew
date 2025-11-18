'use client';

import { useRouter } from 'next/navigation';
import Image from "next/image";
import Nav from "../nav/navbar";
import Footer from "../nav/footer";
import styles from "../css/whyChooseUs.module.css";
import "../globals.css";

export default function WhyChooseUs(){


    return(
    <div className={styles.whyChooseUsAll}>

                  <div className="nav">
            <Nav />
                  </div >
        
        <div className={styles.whyChooseUsMain}>

<div className={styles.whyChooseUsBanner} >

  <div className={styles.whyChooseUsBannerHeading} >

  <h2><span>

  Why Choose&nbsp;
  </span>
   <span className={styles.whyChooseUsBannerHeadingBlue}> Smarkitals Strategist
    </span>
   </h2>
  </div>

  <p>Your growth partner in financial strategy, business planning, and governance transformation.
</p>




</div>


<div className={styles.whyChooseUsNumber}>

    <div>
        <h4>
            500+
        </h4>
        <p>
            Clients Served
        </p>
    </div>

      <div>
        <h4>
            35+
        </h4>
        <p>
           Years Experience
        </p>
    </div>

      <div>
        <h4>
            50+
        </h4>
        <p>
            Expert Team Members
        </p>
    </div>

      <div>
        <h4>
            98%
        </h4>
        <p>
            Client Satisfaction
        </p>
    </div>

</div>

<div className={styles.Differentiators}>

<div className={styles.DifferentiatorsHeading} >
    <h3>
        Our Differentiators
    </h3>
    <p>
        What makes us the right choice for your business consulting needs.
    </p>
    

</div>

<div className={styles.DifferentiatorsCards}>
        <div className={styles.DifferentiatorsCard}>

            <div className={styles.DifferentiatorsCardImg}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/WhyChooseUs.tsx:113:18" data-lov-name="item.icon" data-component-path="src/pages/WhyChooseUs.tsx" data-component-line="113" data-component-file="WhyChooseUs.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
            </div>

            <h5>
                Proven Expertise
            </h5>

            <p>
                Years of combined experience across diverse industries and business challenges, delivering consistent results for our clients.
            </p>

        </div>
        <div className={styles.DifferentiatorsCard}>

            <div className={styles.DifferentiatorsCardImg}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/WhyChooseUs.tsx:113:18" data-lov-name="item.icon" data-component-path="src/pages/WhyChooseUs.tsx" data-component-line="113" data-component-file="WhyChooseUs.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>

            <h5>
                Dedicated Team
            </h5>

            <p>
              Seasoned professionals committed to your success, providing personalized attention and expert guidance throughout your journey.
            </p>

        </div>
        <div className={styles.DifferentiatorsCard}>

            <div className={styles.DifferentiatorsCardImg}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/WhyChooseUs.tsx:113:18" data-lov-name="item.icon" data-component-path="src/pages/WhyChooseUs.tsx" data-component-line="113" data-component-file="WhyChooseUs.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>

            <h5>
               Timely Delivery
            </h5>

            <p>
                We understand the importance of deadlines and consistently deliver high-quality solutions within agreed timeframes.
            </p>

        </div>
        <div className={styles.DifferentiatorsCard}>

            <div className={styles.DifferentiatorsCardImg}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/WhyChooseUs.tsx:113:18" data-lov-name="item.icon" data-component-path="src/pages/WhyChooseUs.tsx" data-component-line="113" data-component-file="WhyChooseUs.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            </div>

            <h5>
                Trusted Partnership
            </h5>

            <p>
               Built on integrity and transparency, we maintain the highest standards of confidentiality and professional ethics.
            </p>

        </div>
        <div className={styles.DifferentiatorsCard}>

            <div className={styles.DifferentiatorsCardImg}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/WhyChooseUs.tsx:113:18" data-lov-name="item.icon" data-component-path="src/pages/WhyChooseUs.tsx" data-component-line="113" data-component-file="WhyChooseUs.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            </div>

            <h5>
             Comprehensive Coverage
            </h5>

            <p>
               End-to-end solutions that address all aspects of your business needs, from compliance to strategic growth planning.
            </p>

        </div>
        <div className={styles.DifferentiatorsCard}>

            <div className={styles.DifferentiatorsCardImg}>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/WhyChooseUs.tsx:113:18" data-lov-name="item.icon" data-component-path="src/pages/WhyChooseUs.tsx" data-component-line="113" data-component-file="WhyChooseUs.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            </div>

            <h5>
                Innovation Focus
            </h5>

            <p>
               Leveraging cutting-edge tools and methodologies to provide efficient, modern solutions that drive competitive advantage.
            </p>

        </div>
        
</div>



</div>


{/* <div className={styles.certifications }>
   <div className={styles.DifferentiatorsHeading} >
    <h3>
       Certifications & Recognition
    </h3>
    <p>
       Our commitment to excellence is recognized through various certifications and industry acknowledgments.
    </p>
</div>

<div  className={styles.certificationsCards }>
    <div  className={styles.certificationsCard }>

            <div className={styles.certificationsCardImg }>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-6 w-6 text-white" data-lov-id="src/pages/WhyChooseUs.tsx:147:18" data-lov-name="Shield" data-component-path="src/pages/WhyChooseUs.tsx" data-component-line="147" data-component-file="WhyChooseUs.tsx" data-component-name="Shield" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            </div>

            <h4>
                ISO 9001:2015 Certified
            </h4>

    </div>

    <div  className={styles.certificationsCard }>

            <div className={styles.certificationsCardImg }>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-6 w-6 text-white" data-lov-id="src/pages/WhyChooseUs.tsx:147:18" data-lov-name="Shield" data-component-path="src/pages/WhyChooseUs.tsx" data-component-line="147" data-component-file="WhyChooseUs.tsx" data-component-name="Shield" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            </div>

            <h4>
                Certified Public Accountants
            </h4>

    </div>

    <div  className={styles.certificationsCard }>

            <div className={styles.certificationsCardImg }>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-6 w-6 text-white" data-lov-id="src/pages/WhyChooseUs.tsx:147:18" data-lov-name="Shield" data-component-path="src/pages/WhyChooseUs.tsx" data-component-line="147" data-component-file="WhyChooseUs.tsx" data-component-name="Shield" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            </div>

            <h4>
               Industry Recognition Awards
            </h4>

    </div>


    <div  className={styles.certificationsCard }>

            <div className={styles.certificationsCardImg }>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-6 w-6 text-white" data-lov-id="src/pages/WhyChooseUs.tsx:147:18" data-lov-name="Shield" data-component-path="src/pages/WhyChooseUs.tsx" data-component-line="147" data-component-file="WhyChooseUs.tsx" data-component-name="Shield" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            </div>

            <h4>
                Professional Memberships
            </h4>

    </div>

    <div  className={styles.certificationsCard }>

            <div className={styles.certificationsCardImg }>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-6 w-6 text-white" data-lov-id="src/pages/WhyChooseUs.tsx:147:18" data-lov-name="Shield" data-component-path="src/pages/WhyChooseUs.tsx" data-component-line="147" data-component-file="WhyChooseUs.tsx" data-component-name="Shield" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            </div>

            <h4>
              Regulatory Compliance
            </h4>

    </div>

    <div  className={styles.certificationsCard }>

            <div className={styles.certificationsCardImg }>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-6 w-6 text-white" data-lov-id="src/pages/WhyChooseUs.tsx:147:18" data-lov-name="Shield" data-component-path="src/pages/WhyChooseUs.tsx" data-component-line="147" data-component-file="WhyChooseUs.tsx" data-component-name="Shield" data-component-content="%7B%22className%22%3A%22h-6%20w-6%20text-white%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            </div>

            <h4>
                Data Security Standards
            </h4>

    </div>

 


</div>

</div> */}

<div className={styles.priority } >
    <div className={styles.priorityLeft } >
        <h3>
            Your Success is Our Priority
        </h3>
        <p>
            We measure our success by the growth and achievements of our clients. Every strategy we develop, every solution we implement, is designed with your long-term success in mind.
        </p>
        <ul>
            <li>
                Customized strategies for each client

            </li>
            <li>
                Regular progress monitoring and reporting

            </li>
            <li>
                Continuous support and guidance

            </li>
            <li>
                Long-term partnership approach
            </li>
        </ul>
    </div>
    {/* <div className={styles.priorityRight }>
        <div className={styles.priorityRightBox }>
            <h5>
                Ready to Experience the Difference?
            </h5>
          
            <p>
                Join hundreds of satisfied clients who have transformed their businesses with our expert guidance.
            </p>

            <div lassName={styles.priorityRightBoxNumber }>

            <h5>
                98%
            </h5>
            <p>
                Client Retention Rate
            </p>
            </div>

        </div>
    </div> */}

</div>



        </div>




                    <div className="footer">
                  <Footer />
                        </div>
    </div>
    )
}
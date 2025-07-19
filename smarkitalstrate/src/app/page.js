'use client';


import { useRouter } from 'next/navigation';
import Image from "next/image";
import Nav from "./nav/navbar";
import Footer from "./nav/footer";
import styles from "./css/home.module.css";
// import global from "./globals.css";
import './globals.css';


export default function Home() {


   const router = useRouter();
    const handleClick = (path) => () => {
    router.push(path);
  };


  return (

    <div className={styles.homeAll}>

      <div className="nav">
<Nav />
      </div >

      <div className={styles.homeMain}>

<div className={styles.homeMainBanner} >

  <div className={styles.homeMainBannerHeading} >

  <h2>
    Building Businesses,
  </h2 >
  <h2 className={styles.homeMainBannerHeadingBlue}>Empowering Growth</h2>
  </div>

  <p>Smarkitals Strategist LLP, part of Smarkitals Group of Companies, provides comprehensive financial and management consulting services to help your business thrive in today's competitive landscape.</p>


  <div className={styles.homeMainBannerButton}>
    <button className={styles.homeMainBannerButtonBlue} onClick={handleClick('/contact')} >Start Your Journey with Us &rarr;
</button>
<button className={styles.homeMainBannerButtonWhite} onClick={handleClick('/services')} >Explore Our Services</button>
  </div>



</div>
<div className={styles.partnnerUS} >

    <h3>
      Why Partner with Us?
    </h3>


    <p>We combine expertise, innovation, and dedication to deliver exceptional results for your business.</p>


</div>
<div className={styles.homeCards} >
  <div className={styles.homeCard} >
    <div className={styles.homeCardSvgBg}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/Home.tsx:115:18" data-lov-name="feature.icon" data-component-path="src/pages/Home.tsx" data-component-line="115" data-component-file="Home.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
    </div>
 
    <h3>Growth Focused</h3>
    <p>Strategic solutions designed to accelerate your business growth</p>
  </div>
  <div className={styles.homeCard} >
    <div className={styles.homeCardSvgBg}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/Home.tsx:115:18" data-lov-name="feature.icon" data-component-path="src/pages/Home.tsx" data-component-line="115" data-component-file="Home.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    </div>
 
    <h3>Expert Team</h3>
    <p>Experienced professionals with deep industry knowledge</p>
  </div>  <div className={styles.homeCard} >
    <div className={styles.homeCardSvgBg}>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/Home.tsx:115:18" data-lov-name="feature.icon" data-component-path="src/pages/Home.tsx" data-component-line="115" data-component-file="Home.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
    </div>
 
    <h3>Trusted Partner</h3>
    <p>Reliable support you can count on for all your business needs</p>
  </div>  <div className={styles.homeCard} >
    <div className={styles.homeCardSvgBg}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/Home.tsx:115:18" data-lov-name="feature.icon" data-component-path="src/pages/Home.tsx" data-component-line="115" data-component-file="Home.tsx" data-component-name="feature.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
    </div>
 
    <h3>Efficient Solutions</h3>
    <p>Fast, effective services that deliver measurable results</p>
  </div>
</div>
<div className={styles.getTouch} >

    <h3>
      Ready to Transform Your Business?
    </h3>

    <p>Let's discuss how we can help you achieve your business goals with our comprehensive consulting services.</p>

    <button onClick={handleClick('/contact')} >
      Get in Touch Today &rarr;
    </button>

</div>



      </div>


      <div className='footer'>
<Footer />
      </div>

    </div>

  










    
  );
}


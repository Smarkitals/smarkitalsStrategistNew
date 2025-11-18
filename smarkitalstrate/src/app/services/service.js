'use client';

import { useRouter } from 'next/navigation';
import Image from "next/image";
import Nav from "../nav/navbar";
import Footer from "../nav/footer";
import styles from "../css/services.module.css";
import "../globals.css";

export default function Services(){
       const router = useRouter();
    const handleClick = (path) => () => {
    router.push(path);
  };

    return (

        <div className={styles.servicesAll}>

                  <div className="nav">
            <Nav />
                  </div >
<div className={styles.servicesMain} >

    <div className={styles.serviceMainBanner} >

  <div className={styles.serviceMainBannerHeading} >

  <h2><span>

   Our&nbsp;
  </span>
   <span className={styles.serviceMainBannerHeadingBlue}>Services
    </span>
   </h2>
  </div>

  <p>
Smarkitals Strategist LLP offers holistic consulting across financial planning, business restructuring, and corporate governance. We focus on transforming business operations into profitable, compliant, and sustainable systems.

    </p>




</div>

<div className={styles.serviceCards} >
    <div className={styles.serviceCard} >
        <div className={styles.serviceCardTop} >
            <div className={styles.serviceCardImgBg} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/Services.tsx:99:22" data-lov-name="service.icon" data-component-path="src/pages/Services.tsx" data-component-line="99" data-component-file="Services.tsx" data-component-name="service.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>

            </div>
            <div className={styles.serviceCardHeading} >
                <h3><strong> Business & Financial Advisory
                    </strong> </h3>
                <p>Complete assistance with business formation, registration, and licensing across various jurisdictions.</p>
            </div>
        </div>
        <div className={styles.serviceCardUl} >
            <ul>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

                    Business Setup & Financial Structuring


                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

                    Budgeting, Forecasting & Financial Planning

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

Cash Flow & Working Capital Optimization

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

Cost Analysis & Profitability Improvement

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>
Fundraising & Investment Readiness

                    </span>
                </li>


{/* <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>
Taxation, Audit & Regulatory Advisory

                    </span>
                </li> */}


                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>
Internal Control & Governance Design

                    </span>
                </li>



                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>
Virtual CFO & Controller Services

                    </span>
                </li>

            </ul>
        </div>
    </div>




     <div className={styles.serviceCard} >
        <div className={styles.serviceCardTop} >
            <div className={styles.serviceCardImgBg} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/Services.tsx:99:22" data-lov-name="service.icon" data-component-path="src/pages/Services.tsx" data-component-line="99" data-component-file="Services.tsx" data-component-name="service.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><rect width="16" height="20" x="4" y="2" rx="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>

            </div>
            <div className={styles.serviceCardHeading} >
                <h3><strong> Corporate Strategy & Performance Consulting

                    </strong> </h3>
                <p>Comprehensive tax planning, preparation, and compliance services to minimize liabilities and ensure regulatory adherence.</p>
            </div>
        </div>
        <div className={styles.serviceCardUl} >
            <ul>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

                    Strategic Planning & Business Model Design



                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

                   KPI Frameworks & Performance Monitoring

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

 Process Improvement & Efficiency Programs

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

Market Expansion & Feasibility Analysis


                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

Merger, Acquisition & Restructuring Strategy

                    </span>
                </li>



                                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>


                Profitability & Productivity Optimization

                    </span>
                </li>



            </ul>
        </div>
    </div>

     <div className={styles.serviceCard} >
        <div className={styles.serviceCardTop} >
            <div className={styles.serviceCardImgBg} >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/Services.tsx:99:22" data-lov-name="service.icon" data-component-path="src/pages/Services.tsx" data-component-line="99" data-component-file="Services.tsx" data-component-name="service.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>

            </div>
            <div className={styles.serviceCardHeading} >
                <h3><strong> Risk, Audit & Governance

                    </strong> </h3>
                <p>Professional accounting services and business process outsourcing solutions to streamline your operations.</p>
            </div>
        </div>
        <div className={styles.serviceCardUl} >
            <ul>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

                   Internal & Management Audits

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

                  Financial Risk & Control Assessment

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

SOP & Policy Framework Development

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>
Compliance & Governance Audits

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

Risk Register & Mitigation Planning
                    </span>
                </li>


                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

Management Reporting & Continuous Monitoring
                    </span>
                </li>


                
            </ul>
        </div>
    </div>

     <div className={styles.serviceCard} >
        <div className={styles.serviceCardTop} >
            <div className={styles.serviceCardImgBg} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/Services.tsx:99:22" data-lov-name="service.icon" data-component-path="src/pages/Services.tsx" data-component-line="99" data-component-file="Services.tsx" data-component-name="service.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>

            </div>
            <div className={styles.serviceCardHeading} >
                <h3><strong> Policy & Regulatory Affairs
                    </strong> </h3>
                <p>Strategic consulting services to optimize business operations and drive sustainable growth.</p>
            </div>
        </div>
        <div className={styles.serviceCardUl} >
            <ul>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

                     Government Relations & Licensing

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

                  Policy Representation & Advocacy

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

Legal Documentation & Compliance

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

CSR, ESG & Sustainability Consulting

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

Tender Management & Land Acquisition Support
                    </span>
                </li>
            </ul>
        </div>
    </div>

     <div className={styles.serviceCard} >
        <div className={styles.serviceCardTop} >
            <div className={styles.serviceCardImgBg} >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/Services.tsx:99:22" data-lov-name="service.icon" data-component-path="src/pages/Services.tsx" data-component-line="99" data-component-file="Services.tsx" data-component-name="service.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
            </div>
            <div className={styles.serviceCardHeading} >
                <h3><strong> Startup & SME Advisory
                    </strong> </h3>
                <p>Specialized advisory services tailored for startups and small to medium enterprises.</p>
            </div>
        </div>
        <div className={styles.serviceCardUl} >
            <ul>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

                    Business Plan Development

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

                  Funding & Investment Advisory

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

Market Entry Strategy

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

Scaling Strategies

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

Mentorship Programs
                    </span>
                </li>
            </ul>
        </div>
    </div>

</div>

<div className={styles.solution} >
    <div  className={styles.solutionCard}>
        <div className={styles.solutionCardLeft} >
            <div className={styles.solutionCardLeftHeading} >

            <div className={styles.serviceCardImgBg} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-8 w-8 text-brand-blue-600" data-lov-id="src/pages/Services.tsx:99:22" data-lov-name="service.icon" data-component-path="src/pages/Services.tsx" data-component-line="99" data-component-file="Services.tsx" data-component-name="service.icon" data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-brand-blue-600%22%7D"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>

            </div>
            
            <h2>
                Custom Solutions
            </h2>
            </div>
            <p>

            </p>
             <div className={styles.serviceCardUl} >
            <ul>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

                    Business Plan Development

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

                  Funding & Investment Advisory

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

Market Entry Strategy

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

Scaling Strategies

                    </span>
                </li>
                <li> 
                    <span>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big h-5 w-5 text-green-500 mr-3 flex-shrink-0" data-lov-id="src/pages/Services.tsx:115:22" data-lov-name="CheckCircle" data-component-path="src/pages/Services.tsx" data-component-line="115" data-component-file="Services.tsx" data-component-name="CheckCircle" data-component-content="%7B%22className%22%3A%22h-5%20w-5%20text-green-500%20mr-3%20flex-shrink-0%22%7D"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                    </span>
                    <span>

Mentorship Programs
                    </span>
                </li>
            </ul>
            <button className={styles.solutionCardLeftButton} style={{ cursor: 'pointer' }} onClick={handleClick('contact')}>
                Disscuss Your Needs 

            </button>
        </div>

        </div>
             <div className={styles.solutionCardRight} >

                <h2>
                    Ready to Get Started?
                </h2>
                <p>
                    Contact us today to learn how our comprehensive services can help transform your business and achieve your goals.
                </p>

                <ul>
                    <li>Free initial consultation
</li>
                    <li>Customized service packages
</li>
                    <li>Dedicated account management</li>
                </ul>

            
        </div>
    </div>
</div>





</div>







  <div className="footer">
<Footer />
      </div>



</div>





    )}
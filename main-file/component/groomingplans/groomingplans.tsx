"use client";

import React from "react";
import FaqSection from "@/component/faq/FaqSection";
import { groomingFaqData } from "@/Data/groomingfaqs"; // Update the path as needed
const ORNGroomingPlans = () => {
  return (
    <div className="grooming-container">
      <h1 className="fade-in">ORN-AI Grooming Plans</h1>
      <p className="fade-up">
        Ready for the 3 P's? <br />
        <span>Polish Your Professional Potential</span>
      </p>

      {/* <div className="grooming-sec1">
        <div className="sec1-text fade-in">
          <h1>What is ORN-AI Grooming?</h1>
          <p>
            ORN-AI grooming is a tailored process designed to enhance crucial
            workplace skills, preparing you to excel in a competitive job
            market.
          </p>
        </div>
        <div className="sec1-img fade-up">
          <img src="/images/grooming_img1.jpg" alt="grooming_img1" width={10} />
        </div>
      </div>

      <div className="grooming-sec2">
        <div className="sec2-img fade-up">
          <img src="/images/grooming_img2.jpg" alt="grooming_img2" />
        </div>
        <div className="sec2-text fade-in">
          <h1>Why Choose ORN-AI Grooming?</h1>
          <p>
            Our plans transform your professional persona, equipping you with
            advanced skills in communication, presentation, and technical
            expertise for today's dynamic challenges.
          </p>
        </div>
      </div>

      <div className="grooming-sec3">
        <div className="sec3-text fade-in">
          <h1>How Does Grooming Work at ORN-AI?</h1>
          <p>
            Start with a free assessment to identify your needs. We then
            customize a grooming plan that includes:
          </p>
          <ul>
            <li className="fade-up">
              <span>Enhanced Communication:</span> Sharpen your business communication and
              telephone skills.
            </li>
            <li className="fade-up">
              <span>Language Mastery:</span> Expand your English proficiency and grammar.
            </li>
            <li className="fade-up">
              <span>Professional Writing Development:</span> Command respect with superior
              writing and proposal skills.
            </li>
            <li className="fade-up">
              <span>Presentation Excellence:</span> Presentation Excellence: Boost your public speaking and
              presentation capabilities.
            </li>
            <li className="fade-up">
              <span>Technological Proficiency:</span> Update your skills with the latest
              digital tools.
            </li>
            <li className="fade-up">
              <span>Career Advancement:</span> Get tailored interview prep, CV branding, and
              strategic placement.
            </li>
            <li className="fade-up">
              <span>Hands-on Experience:</span> Participate in internships and receive
              targeted placement assistance.
            </li>
          </ul>
        </div>
        <div className="sec3-img fade-up">
          <img src="/images/grooming_img3.jpg" alt="grooming_img3" />
        </div>
      </div> */}

<div>
      <FaqSection 
        img="/images/groomingfaq-img.jpg" // Replace with your image path
        faqData={groomingFaqData} 
      />
    </div>

      <div className="grooming-cards">
        <h3>Begin with our free assessment and invest in your future today.</h3>
        <div className="enrolling-cards">
          <div className="grooming-card card1 hover-effect">
            <div className="text-card">
              <div className="text">
                <h1>Essential Skills for Modern Professionals</h1>
                <p>
                  Enhance your communication, writing, and technological skills
                  for broader professional impact.
                </p>
              </div>
              <div className="enroll-btn">
                <button className="cta-button enroll-btn1 hover-effect">Enroll now &rarr;</button>
              </div>
            </div>
          </div>
          <div className="grooming-card card2 hover-effect">
            <div className="text-card">
              <div className="text">
                <h1>Ethical Job Placement</h1>
                <p>
                  We ensure ethical job placements free from scams, readying you
                  for opportunities in metropolitan areas.
                </p>
              </div>
              <div className="enroll-btn">
                <button className="cta-button enroll-btn2 hover-effect">Enroll now &rarr;</button>
              </div>
            </div>
          </div>
          <div className="grooming-card card3 hover-effect">
            <div className="text-card">
              <div className="text">
                <h1>Elevate Your Career with ORN-AI</h1>
                <p>Set out on a path that readies you to take charge.</p>
              </div>
              <div className="enroll-btn">
                <button className="cta-button enroll-btn3 hover-effect">Enroll now &rarr;</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="cta-card fade-up">
        <h3>Begin with our free assessment and invest in your future today.</h3>
        
      </div> */}
    </div>
  );
};

export default ORNGroomingPlans;

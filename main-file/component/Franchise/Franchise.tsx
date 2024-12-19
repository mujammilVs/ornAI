"use client";
import { steps } from "@/Data/FranchiseData";
import React from "react";
import { MdArrowRight } from "react-icons/md";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { RiArrowRightSLine } from "react-icons/ri";

import { toggleVideoOpen } from "@/redux/features/videoSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";









  
  
  




const Franchise = () => {
  
  const dispatch = useAppDispatch()
  const handleVideoShow = () => {
    dispatch(toggleVideoOpen())



  return (
    <main className="main-franchise">

<section className="tf__banner_2 tf__banner_3">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-md-10 col-lg-8">
            <div className="tf__banner_text wow fadeInUp">
              <h5>Welcome to ORN-AI</h5>
              <h1>
              Train <span>Locally</span> <br /> Excel <span>Globally</span>
              </h1>
              <p>
              At ORN-AI, we transform education into opportunity. As a premier training and placement platform, we empower individuals with the skills, confidence, and global connections needed to thrive in today's competitive job market. Whether you're a student, professional, or job seeker, we offer a pathway to success, ensuring every candidate is equipped to achieve their goals.
              </p>
              <ul className="d-flex flex-wrap align-items-center">
                <li>
                  <Link className="common_btn_3" href="/courses">
                    our courses
                  </Link>
                </li>
                <li>
                  <a
                    className="venobox play_btn"
                    role="button"
                    onClick={handleVideoShow}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>




      <section>
        <h1 className="heading"> Train Locally, Excel Globally with ORN-AI</h1>
      </section>
      <section className="main-section">
        <div className="section-left">
          <h1>
            At ORN-AI, we're redefining career development by combining
            world-class training with a{" "}
            <span className="span">100% Placement Guarantee.</span> With over a
            decade of proven global expertise through Aguila Consulting, our
            Franchise Model empowers you to transform lives while building a
            successful business.
          </h1>
          <button className="section-left-btn">
            Know More
            <span>
              <RiArrowRightSLine />
            </span>
          </button>
        </div>
        <div className="section-right">
          <img src="/images/franchise.jpeg" alt="" />
        </div>
      </section>
      <section className="section3">
        <div>
          <h1>Why Partner with ORN-AI ?</h1>
        </div>
        <ul>
          <li>Proven Track Record</li>
          <p>
            Leverage 10+ years of Aguila Consulting's recruitment expertise,
            with thousands of candidates successfully placed globally across
            diverse industries.
          </p>
          <li> Comprehensive Career Solutions</li>
          <p>
            Offer over 100 industry-aligned courses across high-demand fields,
            complete with grooming, real-time project training, and expert-led
            interview preparation until placement.
          </p>
          <li>Global Reach, Local Impact</li>
          <p>
            Tap into Aguila Consulting's international network to place
            candidates worldwide, fulfilling ORN-AI's promise of "Train Locally,
            Excel Globally.
          </p>
          <li>Guaranteed Success</li>
          <p>
            Provide subscribers with assured placements, setting your franchise
            apart in a competitive market.
          </p>
        </ul>
      </section>

      <section className="section4">
        <div className="">
          <h1 className="heading">Our Franchise Model</h1>
        </div>
        <div className="benifit-div">
          <div className="benifits benifits1">
            <h1>Exclusive Territory Rights</h1>
            <p>
              Be the sole ORN-AI franchise in your region, capturing local
              markets with cutting-edge training and placement services.
            </p>
          </div>
          <div className="benifits benifits2">
            <h1>Exclusive Territory Rights</h1>
            <p>
              Be the sole ORN-AI franchise in your region, capturing local
              markets with cutting-edge training and placement services.
            </p>
          </div>
          <div className="benifits benifits3">
            <h1>Exclusive Territory Rights</h1>
            <p>
              Be the sole ORN-AI franchise in your region, capturing local
              markets with cutting-edge training and placement services.
            </p>
          </div>
          <div className="benifits benifits4">
            <h1>Exclusive Territory Rights</h1>
            <p>
              Be the sole ORN-AI franchise in your region, capturing local
              markets with cutting-edge training and placement services.
            </p>
          </div>
        </div>
      </section>

      <section className="section5">
        <div className="cards-container">
          {steps.map((step) => (
            <div key={step._id} className="card">
              <h2 className="card-title">{step.title}</h2>
              <p className="card-description">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Franchise;

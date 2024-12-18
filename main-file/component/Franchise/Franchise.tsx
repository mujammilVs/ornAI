"use client";
import { steps } from "@/Data/FranchiseData";
import React from "react";
import { MdArrowRight } from "react-icons/md";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { RiArrowRightSLine } from "react-icons/ri";

const Franchise = () => {
  return (
    <main className="main-franchise">
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

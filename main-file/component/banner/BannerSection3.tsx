"use client";
import { toggleVideoOpen } from "@/redux/features/videoSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import React from "react";

const BannerSection3 = () => {
  const dispatch = useAppDispatch()
  const handleVideoShow = () => {
    dispatch(toggleVideoOpen())
  }
  return (
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
  );
};

export default BannerSection3;

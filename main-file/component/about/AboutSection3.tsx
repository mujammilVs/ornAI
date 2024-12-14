"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

type Props = {
  style: string;
}
const AboutSection3 = ({ style } : Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = document.querySelector(".counter-box");

    if (targetElement) {
      intersectionObserverRef.current = new IntersectionObserver(
        onVisibilityChange,
        {
          threshold: 0.5,
        }
      );

      intersectionObserverRef.current.observe(targetElement);
    }

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);
  return (
    <div className={`${style} tf__about_2_area mb-5` }>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__about_2_img">
              <div className="tf__about_small">
                <img
                  src="images/services2.jpg"
                  alt="about us"
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__about_large counter-box">
                <img
                  src="images/services1.png"
                  alt="Service_1"
                  className="img-fluid w-100"
                />
              </div>
              {/* <p>
                <span>
                {isVisible && (
              <CountUp
                start={1}
                end={24}
                duration={5}
                formattingFn={(value) => `${value}+`}
              />
            )}</span> Years of Experience
              </p> */}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight">
            <div className="tf__about_2_text">
              
              <div className="tf__heading_area tf__heading_area_left mb_25">
              <h5>Our Services</h5>
                {/* <h2>Complete About Students University Education.</h2> */}
              </div>
              {/* <p>
                Business tailored it design, management & support services
                business agency elit, sed do eiusmod tempor.{" "}
              </p> */}
                {/* <h5>Our Services</h5> */}
              <ul>
                <li>
                  <div className="icon icon-1">
                    <img
                      src="images/training.png"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Cutting-Edge Training Programs</h4>
                    <p>
                    Learn from expertly designed courses tailored to current industry demands.<br />
                    Enjoy flexible learning with AI-powered content and live expert sessions.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon icon-2">
                    <img
                      src="images/cross-platform.png"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Cross-Technology Skill Development</h4>
                    <p>
                    Expand your expertise with cross-functional training, preparing you for diverse roles.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon icon-3">
                    <img
                      src="images/job-offer.png"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Guaranteed Placement Services</h4>
                    <p>
                    Personalized CV writing, interview preparation, and global job placement.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon icon-4">
                    <img
                      src="images/eng.png"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>English Proficiency Courses</h4>
                    <p>
                    Specifically designed for non-English speakers to enhance language skills and career readiness.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon icon-5">
                    <img
                      src="images/acquisition.png"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Bench Sales Assistance</h4>
                    <p>
                    Comprehensive job search support, including weekly assessments, direct applications, and interview grooming.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-12 mt_110 xs_mt_100 wow fadeInUp">
            <div className="tf__about_us_counter counter-box d-flex flex-wrap align-items-center">
              <p>
                {isVisible && (
                  <span className="counter">
                    <CountUp
                start={1}
                end={270000}
                duration={5}
              /> 
                  </span>
             
            )} More Students course
                you do best !
              </p>
              <a href="#">Export All</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;

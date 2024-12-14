"use client";
import { FaqType } from "@/types";
import React, { useState } from "react";

type Props = {
  img: string;
  faqData: FaqType[];
};

const FaqSection = ({ img, faqData }: Props) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const handleAccordionBtn = (itemId: number) => {
    setOpenAccordion((prevState) => (prevState === itemId ? null : itemId));
  };

  return (
    <section className="tf__faq mt_100 pt_95 xs_pt_100 pb_100">
      <div className="container">
        <div className="row">
          {/* Image Section */}
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__faq_img">
              <img src={img} alt="FAQs" className="img-fluid w-100" />
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="col-xl-6 col-lg-6 wow fadeInRight">
            <div className="tf__faq_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>Our Education FAQ</h5>
                <h2>Got Questions? Here Are Your Answers - FAQ</h2>
              </div>
              <p className="description">
                Business tailored it design, management & support services
                business agency elit, sed do eiusmod tempor.
              </p>
              <div className="tf__faq_accordion">
                <div className="accordion" id="accordionExample">
                  {faqData?.slice(0, 4).map((item, index) => {
                    const isOpen = openAccordion === index;
                    const uniqueId = `accordion-item-${index}`;
                    return (
                      <div
                        className={`accordion-item ${item.color}`}
                        key={index}
                      >
                        <h2 className="accordion-header" id={`${uniqueId}-header`}>
                          <button
                            className={`accordion-button ${
                              isOpen ? "" : "collapsed"
                            }`}
                            onClick={() => handleAccordionBtn(index)}
                            aria-expanded={isOpen}
                            aria-controls={`${uniqueId}-content`}
                          >
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`${uniqueId}-content`}
                          className={`accordion-collapse collapse ${
                            isOpen ? "show" : ""
                          }`}
                          aria-labelledby={`${uniqueId}-header`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {Array.isArray(item.answer) ? (
                              <ul>
                                {item.answer.map((line, idx) => (
                                  <li key={idx}>{line}</li>
                                ))}
                              </ul>
                            ) : (
                              <p>{item.answer}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

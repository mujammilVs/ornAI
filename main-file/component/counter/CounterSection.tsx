import React from "react";
import CounterArea from "./CounterArea";

const CounterSection = () => {

  return (
    <section className="tf__counter_3">
      <div className="container">
        <div className="tf__counter_3_area">
          <div className="row">
            <div className="col-xxl-6 col-lg-8 wow fadeInUp">
              <div className="tf__counter_3_text">
                <div className="tf__heading_area tf__heading_area_left mb_25">
                  <h5>Explore ORN-AI</h5>
                  <h2>Your Gateway to a Thriving Career</h2>
                </div>
                <p>
                ORN-AI bridges the gap between learning and employment with:
                </p>
              </div>
            </div>
            <div className="col-xl-9 wow fadeInUp">
              <CounterArea marginTop="" showAll={false}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;   
import React from "react";
import ContactForm from "../form/ContactForm";
import { PiPhoneCallLight } from "react-icons/pi";
import { MdAttachEmail, MdAttachFile } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

const ContactPageSection = () => {
  return (
    <section className="tf__contact_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-7 col-lg-6 wow fadeInLeft">
            <div className="tf__contact_form">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>Contact Us</h5>
                <h2>Get Our Contact Now.</h2>
              </div>
              <p>For any queries please feel free to contact us</p>
              <ContactForm />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInRight">
            <div className="tf__contact_text">
              <div className="tf__contact_single">
                <div className="icon blue">
                  {/* <i className="fas fa-phone-alt"></i> */}
                  <PiPhoneCallLight />
                </div>
                <div className="text">
                  <h3>Call</h3>
                  <a href="callto:+91 9876543210">+91 9876543210</a>
                  <a href="callto:+91 9876543210">+91 9876543210</a>
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon orange">
                  {/* <i className="fas fa-phone-alt"></i> */}
                  <MdAttachFile />
                </div>
                <div className="text">
                  <h3>mail</h3>
                  <a href="mailto:ornAi@gmail.com">ornAi@gmail.com</a>
                  <a href="mailto:ornAi@gmail.com">ornAi@gmail.com</a>
                </div>
              </div>
              <div className="tf__contact_single">
                <div className="icon green">
                  {/* <i className="fas fa-phone-alt"></i> */}
                  <GrMapLocation />
                </div>
                <div className="text">
                  <h3>address</h3>
                  <p>Hitech city, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-12 wow fadeInUp">
            <div className="tf__contact_map mt_100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29199.78758207035!2d90.43684581929195!3d23.819543211524437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fce7d991f%3A0xacfaf1ac8e944c05!2sBasundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1667021568123!5m2!1sen!2sbd"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageSection;

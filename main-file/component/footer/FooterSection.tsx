import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="tf__footer mt_100">
      <div className="tf__footer_overlay pt_75">
        <div className="container">
          <div className="row justify-content-between g-4">
            <div className="col-xl-3 col-sm-10 col-md-7 col-lg-6">
              <div className="tf__footer_logo_area">
                <Link className="footer_logo" href="/">
                  <img
                    src="/images/orn-logo.png"
                    alt="logo"
                    className="img-fluid w-100"
                  />
                </Link>
                <p>
                  Nemo enim ipsam voluptate quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia magni this dolores eos qui ratione .
                </p>
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-sm-10 col-md-5 col-lg-5">
              <div className="tf__footer_content xs_mt_50">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link href="/courses">About us</Link>
                  </li>
                  <li>
                    <Link href="/events">Courses</Link>
                  </li>
                  <li>
                    <Link href="/about">Grooming plans</Link>
                  </li>
                  <li>
                    <Link href="/contact">Franchise</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-10 col-md-7 col-lg-col-lg-6">
              <div className="tf__footer_content xs_mt_30">
                <h3>Our Contacts</h3>
                <p>Hitech city, Hyderabad</p>
                <p>
                  <span> Phone: <Link href='tel: +8 1440 456 782'>+8 1440 456 782</Link></span>
                </p>
                <p>
                  <span>Email: <Link href='mailTo: example@mail.com'>example@mail.com</Link> </span>
                  
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-sm-10 col-md-5 col-lg-4 col-lg-5">
              <div className="tf__footer_content xs_mt_45">
                <h3>News Letter</h3>
                <p>
                  Subscribe to our news letter
                </p>
                <form>
                  <input type="text" placeholder="Your Email" />
                  <button>subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tf__copyright">
                <p>Copyright © ORN - AI all rights reserved.</p>
                <ul className="d-flex flex-wrap">
                  <li>
                    <Link href="/privacy-policy">Privacy policy</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
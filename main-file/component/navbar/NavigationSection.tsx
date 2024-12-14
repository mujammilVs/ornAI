"use client";
import React from "react";
import Navlink from "./Navlink";
import SubNavlink from "./SubNavlink";
import { useAppSelector } from "@/redux/hooks";

type Props = {
  position: string;
  btnPosition: boolean;
  navRef?: React.RefObject<HTMLDivElement>;
};

const NavigationSection = ({ position, btnPosition, navRef }: Props) => {
  const isMobileNavOpen = useAppSelector((state) => state.mobileNav.isMobileNavOpen);

  return (
    <div
      ref={navRef}
      className={`collapse navbar-collapse ${isMobileNavOpen ? "show" : ""}`}
      id="navbarNav"
    >
      <ul className={`navbar-nav ${position}`}>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <Navlink href="/about">About Us</Navlink>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            Courses <i className="fa fa-angle-down"></i>
          </a>
          <ul className="tf__droap_menu">
            <li>
              <SubNavlink href="/courses">Courses</SubNavlink>
            </li>
            <li>
              <SubNavlink href="/courses/modern-frontend-frameworks">
                Course Details
              </SubNavlink>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link">Grooming Plans</a>
        </li>
        <li className="nav-item">
          <Navlink href="/contact">Contact</Navlink>
        </li>
        <li className="nav-item">
          <a className="nav-link common_btn" href="/login">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link common_btn" href="/register">
            Register
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationSection;


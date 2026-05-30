"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (

    <div className="header">

      <nav className="navbar navbar-expand-lg navbar-dark nav-custom">

        {/* Logo */}
        <Link href="/" className="navbar-brand">

          <Image
            src="/images/logo.webp"
            alt="CTL Logo"
            width={120}
            height={40}
            priority
          />

        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        {/* Navbar */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>

          <ul className="navbar-nav ms-auto align-items-lg-center">

            {/* About */}
            <li className="nav-item mx-3">

              <Link
                href="/about"
                className="nav-link"
                onClick={handleClose}
              >
                About Us
              </Link>

            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown mx-3 position-relative">

              <Link
                href="#"
                className="nav-link dropdown-toggle custom-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                What we do
              </Link>

              <ul className="dropdown-menu custom-dropdown">

                <li>
                  <Link
                    href="https://custom-tech-nine.vercel.app/custom-website-development-service"
                    className="dropdown-item custom-item"
                    onClick={handleClose}
                  >
                    Custom Websites
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://custom-tech-nine.vercel.app/custom-app-development-service"
                    className="dropdown-item custom-item"
                    onClick={handleClose}
                  >
                    Custom Applications
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://custom-tech-nine.vercel.app/system-integration-service"
                    className="dropdown-item custom-item"
                    onClick={handleClose}
                  >
                    System Integrations
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://custom-tech-nine.vercel.app/ecommerce-solution-service"
                    className="dropdown-item custom-item"
                    onClick={handleClose}
                  >
                    eCommerce Solutions
                  </Link>
                </li>

              </ul>

            </li>

            {/* Results */}
            <li className="nav-item mx-3">

              <Link
                href="#"
                className="nav-link"
                onClick={handleClose}
              >
                Our Results
              </Link>

            </li>

            {/* Insight */}
            <li className="nav-item mx-3">

              <Link
                href="#"
                className="nav-link"
                onClick={handleClose}
              >
                Insight
              </Link>

            </li>

            {/* Contact */}
            <li className="ms-lg-3 mt-3 mt-lg-0">

              <Link
                href="#"
                className="btn btn-warning-custom"
              >
                Contact Us
              </Link>

            </li>

          </ul>

        </div>

      </nav>

      {/* CSS */}
      <style jsx>{`

        .custom-toggle::after {
          margin-left: 8px;
          transition: 0.3s ease;
        }

        .dropdown:hover .custom-toggle::after {
          transform: rotate(180deg);
        }

        .custom-dropdown {
          min-width: 290px;
          border: none;
          border-radius: 18px;
          padding: 10px;
          background: #ffffff;
          box-shadow: 0 18px 45px rgba(0,0,0,0.12);
          margin-top: 14px;
          overflow: hidden;
          animation: dropdownFade 0.25s ease;
        }

        .custom-item {
          padding: 14px 18px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          color: #111 !important;
          transition: all 0.25s ease;
          margin-bottom: 4px;
        }

        .custom-item:hover {
          background: #EEF430;
          color: #000 !important;
          transform: translateX(6px);
        }

        @keyframes dropdownFade {

          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        @media (max-width: 991px) {

          .custom-dropdown {
            width: 100%;
            background: transparent;
            box-shadow: none;
            padding: 0;
            margin-top: 10px;
          }

          .custom-item {
            color: #fff !important;
            background: rgba(255,255,255,0.05);
          }

          .custom-item:hover {
            background: rgba(255,255,255,0.12);
            color: #EEF430 !important;
            transform: none;
          }

        }

      `}</style>

    </div>
  );
}
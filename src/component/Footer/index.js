import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-footer-container">
        <div className="search-footer-container">
          <h1 className="footer-heading">BE THE FIRST TO KNOW</h1>
          <p className="footer-paragraph">
            Sign up for updates from metta muse.
          </p>
          <div className="search-container">
            <input
              className="input-search"
              placeholder="Enter your e-mail..."
              type="search"
            />
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact-us-container">
          <h1 className="footer-heading"> CONTACT US</h1>
          <p className="footer-paragraph">+44 221 133 5360</p>
          <p className="footer-paragraph">customercare@mettamuse.com</p>
          <h1 className="footer-heading">CURRENCY</h1>
          <ul className="country-logo-container">
            <img
              src="https://res.cloudinary.com/da52fiag8/image/upload/v1715485992/jt8omgco5zvh3ncopl79.png"
              alt="country-logo"
              className="country-image"
            />

            <li className="usd">USD</li>
          </ul>
          <p className="footer-paragraph transaction-size">
            Transaction will be completed in Euros and a currency reference is
            available on hover
          </p>
        </div>
      </div>
      <div className="bottom-footer-container">
        <ul className="metta-container">
          <h1 className="metta-heading">metta muse</h1>
          <li className="list-items">About Us</li>
          <li className="list-items">Stories</li>
          <li className="list-items">Artisans</li>
          <li className="list-items">Boutiques</li>
          <li className="list-items">Contact Us</li>
          <li className="list-items">EU Compliances Docs</li>
        </ul>
        <ul className="quick-links-container">
          <h1 className="quick-links-heading">QUICK LINKS</h1>
          <li className="list-items">Orders & Shipping</li>
          <li className="list-items">Join/Login as a Seller</li>
          <li className="list-items">Payment & Pricing</li>
          <li className="list-items">Return & Refunds</li>
          <li className="list-items">FAQs</li>
          <li className="list-items">Privacy Policy</li>
          <li className="list-items">Terms & Conditions</li>
        </ul>
        <div className="follow-us-container">
          <h1 className="follow-us-heading">FOLLOW US</h1>
          <div className="social-container">
            <AiFillInstagram className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
          <div className="payment-container">
            <h1 className="metta-muse-heading">metta muse ACCEPTS</h1>
            <div className="payment-option">
              <div className="pay-container">
                <img
                  src="https://res.cloudinary.com/da52fiag8/image/upload/v1715499867/Group_136187_l9d0dx.png"
                  className="pay-logo"
                  alt="pay-logo-1"
                />
              </div>

              <img
                src="https://res.cloudinary.com/da52fiag8/image/upload/v1715498813/fx5i0wyevlzslgx0cy5d.png"
                className="pay-logo"
                alt="pay-logo-2"
              />
              <img
                src="https://res.cloudinary.com/da52fiag8/image/upload/v1715498991/Group_136192_c9ddyb.png"
                className="pay-logo"
                alt="pay-logo-3"
              />
              <img
                src="https://res.cloudinary.com/da52fiag8/image/upload/v1715499244/Group_136193_ebetra.png"
                className="pay-logo"
                alt="pay-logo-4"
              />
              <img
                src="https://res.cloudinary.com/da52fiag8/image/upload/v1715499244/Group_136195_ylf6xh.png"
                className="pay-logo"
                alt="pay-logo-5"
              />
              <img
                src="https://res.cloudinary.com/da52fiag8/image/upload/v1715499616/Group_136194_ktlcah.png"
                className="pay-logo"
                alt="pay-logo-6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-container">
        <p className="copyright-content">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

//

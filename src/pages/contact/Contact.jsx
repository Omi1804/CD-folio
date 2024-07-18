import React from "react";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { GrInstagram } from "react-icons/gr";

import { FiSend } from "react-icons/fi";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <a href="mailto:om2021064@akgec.ac.in" className="info__icon">
                <FaEnvelopeOpen />
              </a>
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">om2021064@akgec.ac.in</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91 7753951732</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://www.linkedin.com/in/om-nigam-64247323b/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/yu_know_om/"
              className="contact__social-link"
            >
              <GrInstagram />
            </a>

            <a
              href="https://github.com/Omi1804"
              className="contact__social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.facebook.com/om.nigam.7146"
              className="contact__social-link"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Name"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                className="form__control"
                placeholder="Your Email"
              />
            </div>

            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Subject"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

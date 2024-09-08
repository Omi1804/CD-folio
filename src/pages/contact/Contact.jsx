import React from "react";
import { motion } from "framer-motion";
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      className="contact section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 className="section__title" variants={itemVariants}>
        Get In <span>Touch</span>
      </motion.h2>

      <motion.div
        className="contact__container container grid"
        variants={containerVariants}
      >
        <motion.div className="contact__data" variants={itemVariants}>
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <motion.div
              className="info__item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <a href="mailto:om2021064@akgec.ac.in" className="info__icon">
                <FaEnvelopeOpen />
              </a>
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">om2021064@akgec.ac.in</h4>
              </div>
            </motion.div>

            <motion.div
              className="info__item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91 7753951732</h4>
              </div>
            </motion.div>
          </div>

          <motion.div className="contact__socials" variants={containerVariants}>
            {[
              {
                icon: <FaLinkedin />,
                href: "https://www.linkedin.com/in/om-nigam-64247323b/",
              },
              {
                icon: <GrInstagram />,
                href: "https://www.instagram.com/yu_know_om/",
              },
              { icon: <FaGithub />, href: "https://github.com/Omi1804" },
              {
                icon: <FaFacebook />,
                href: "https://www.facebook.com/om.nigam.7146",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="contact__social-link"
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.form className="contact__form" variants={containerVariants}>
          <motion.div
            className="form__input-group"
            variants={containerVariants}
          >
            {["Your Name", "Your Email", "Your Subject"].map(
              (placeholder, index) => (
                <motion.div
                  key={index}
                  className="form__input-div"
                  variants={itemVariants}
                >
                  <motion.input
                    type={index === 1 ? "email" : "text"}
                    className="form__control"
                    placeholder={placeholder}
                    whileFocus={{ scale: 1.05 }}
                  />
                </motion.div>
              )
            )}
          </motion.div>

          <motion.div className="form__input-div" variants={itemVariants}>
            <motion.textarea
              placeholder="Your Message"
              className="form__control textarea"
              whileFocus={{ scale: 1.05 }}
            ></motion.textarea>
          </motion.div>

          <motion.button
            className="button"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;

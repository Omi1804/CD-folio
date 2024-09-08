import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import ResumeItem from "../../components/ResumeItem";
import CV from "../../assets/OmNigamResume.pdf";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import "./About.css";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <motion.main
      className="section container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section className="about" variants={itemVariants}>
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <motion.div className="about__info" variants={itemVariants}>
            <h3 className="section__subtitle">Personal Infos :</h3>

            <ul className="info__list grid">
              <Info />
            </ul>

            <motion.a
              href={CV}
              download=""
              className="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </motion.a>
          </motion.div>

          <motion.div className="stats grid" variants={itemVariants}>
            <Stats />
          </motion.div>
        </div>
      </motion.section>

      <motion.div className="separator" variants={itemVariants}></motion.div>

      <motion.section className="skills" variants={itemVariants}>
        <h3 className="section__subtitle subtitle__center">My Skills</h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </motion.section>

      <motion.div className="separator" variants={itemVariants}></motion.div>

      <motion.section className="resume" variants={itemVariants}>
        <h3 className="section__subtitle subtitle__center">
          Experience & Projects
        </h3>

        <div className="resume__container grid">
          <motion.div className="resume__data" variants={itemVariants}>
            <h3 className="section__subtitle subtitle__center">Achievements</h3>
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
            <h3 className="section__subtitle subtitle__center">Education</h3>
            <div className="resume__data">
              {resume.map((val) => {
                if (val.category === "education") {
                  return <ResumeItem key={val.id} {...val} />;
                }
              })}
            </div>
          </motion.div>

          <motion.div className="resume__data" variants={itemVariants}>
            <div className="button_container">
              <h3 className="section__subtitle subtitle__center resume_title ">
                Projects
              </h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/portfolio"
                  className="button resume_button"
                  style={{ margin: "1rem" }}
                >
                  See Previews{" "}
                  <span className="button__icon">
                    <FaArrowRight />
                  </span>
                </Link>
              </motion.div>
            </div>
            {resume.map((val) => {
              if (val.category === "projects") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </motion.div>
        </div>
      </motion.section>
    </motion.main>
  );
};

export default About;

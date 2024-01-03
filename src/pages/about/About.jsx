import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import ResumeItem from "../../components/ResumeItem";
import { FaDownload, FaCode } from "react-icons/fa";
import CV from "../../assets/OmNigamResume.pdf";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import "./About.css";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos :</h3>

            <ul className="info__list grid">
              <Info />
            </ul>

            <a href={CV} download="" className="button">
              Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Experience & Projects
        </h3>

        <div className="resume__container grid">
          {/* LEFT SIDE  */}
          <div className="resume__data">
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
          </div>

          {/* RIGHT SIDE  */}
          <div className="resume__data">
            <div className="button_container">
              <h3 className="section__subtitle subtitle__center resume_title ">
                Projects
              </h3>
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
            </div>
            {resume.map((val) => {
              if (val.category === "projects") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

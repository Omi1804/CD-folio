import React from "react";
import Profile from "../../assets/cover_photo.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";
import { FlipWords } from "../../components/ui/flip-words";

const Home = () => {
  const skills = [
    "Full-Stack Developer",
    "Native Developer",
    "Front-End Developer",
    "Back-End Developer",
  ];
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span className="Intro">I'm Om Nigam.</span>
            <div className="home__post">
              <FlipWords words={skills} /> <br />
            </div>
            {/* <div className="home__post">Full-Stack Developer</div> */}
          </h1>

          <p className="home__description">
            I'm a Dynamic full stack developer with a comprehensive
            understanding of front-end and back-end development. Proficient in
            various programming languages, frameworks, and tools. Passionate
            about delivering seamless user experiences and driving project
            success.
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;

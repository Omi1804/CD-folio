import React, { useEffect, useState } from "react";
import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import "./Portfolio.css";
import { PropagateLoader } from "react-spinners";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      setLoading(false);
    }, 2 * 1000);
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div className="portfolio__container container grid relative">
        {loading ? (
          <div className="flex justify-center items-center absolute w-full h-[50vh]">
            <PropagateLoader color={localStorage.getItem("color")} />
          </div>
        ) : (
          portfolio.map((item) => (
            <PortfolioItem
              key={item.id}
              {...item}
              onImageLoad={handleImageLoad}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default Portfolio;

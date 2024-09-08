import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import "./Portfolio.css";
import { BarLoader } from "react-spinners";

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const lastPortfolioItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleItems < portfolio.length) {
          setLoading(true);
          setTimeout(() => {
            setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
            setLoading(false);
          }, 1000);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, visibleItems]
  );

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
      className="portfolio section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 className="section__title" variants={itemVariants}>
        My <span>Portfolio</span>
      </motion.h2>
      <motion.div
        className="portfolio__container container grid relative"
        variants={containerVariants}
      >
        {portfolio.slice(0, visibleItems).map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            ref={index === visibleItems - 1 ? lastPortfolioItemRef : null}
          >
            <PortfolioItem {...item} />
          </motion.div>
        ))}
      </motion.div>
      {loading && (
        <motion.div
          className="loading-indicator flex items-center justify-center w-full my-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <BarLoader
            color="#8a2ce2"
            width={200}
            height={3}
            className="rounded-full"
          />
        </motion.div>
      )}
    </motion.section>
  );
};

export default Portfolio;

import React, {useEffect} from 'react'
import {portfolio} from '../../data'
import PortfolioItem from '../../components/PortfolioItem'
import './Portfolio.css'

const Portfolio = () => {

  useEffect(() => {
    // Reset scroll position to the top when the component mounts
    window.scrollTo({
      top:0,
      behavior:'smooth',
    });
  }, []);
  
  return (
    <section className="portfolio section">
      <h2 className="section__title">My <span>Portfolio</span></h2>
      <div className="portfolio__container container grid">
        {portfolio.map((item)=>{
          return <PortfolioItem key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default Portfolio
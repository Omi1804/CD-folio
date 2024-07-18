import React, { useState } from "react";
import Close from "../assets/close.svg";
import parse from "html-react-parser";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" loading="lazy" />

      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl border ">
              <div className="portfolio__modal-content">
                <img
                  src={Close}
                  alt=""
                  className="modal__close"
                  onClick={toggleModal}
                />

                <CardItem translateZ="50" className="w-full">
                  <h3 className="modal__title">{title}</h3>
                </CardItem>

                <ul className="modal__list grid">
                  {details.map(({ icon, title, desc }, index) => {
                    return (
                      <li
                        className="modal__item cursor-pointer hover:text-blue-600"
                        key={index}
                      >
                        <span className="item__icon">{icon}</span>
                        <span className="item__title">{title}</span>
                        <span className="item__details">{parse(desc)}</span>
                      </li>
                    );
                  })}
                </ul>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img src={img} alt="" className="modal__img" loading="lazy" />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;

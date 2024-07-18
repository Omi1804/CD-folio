import React from "react";
import parse from "html-react-parser";

const ResumeItem = ({ icon, year, title, desc }) => {
  return (
    <div className="resume__item">
      <div className="resume__icon">{icon}</div>

      <span className="resume__date uppercase">{year}</span>
      <h3 className="resume__subtitle uppercase hover:scale-[1.02] duration-300 hover:text-blue-600 hover:font-semibold">
        {parse(title)}
      </h3>
      <p className="resume__description">{parse(desc)}</p>
    </div>
  );
};

export default ResumeItem;

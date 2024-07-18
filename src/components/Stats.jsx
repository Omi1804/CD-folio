import React from "react";
import { stats } from "../data";
import parse from "html-react-parser";
import { BackgroundGradient } from "./ui/background-gradient";

const Stats = () => {
  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <BackgroundGradient className="rounded-[5px] bg-white dark:bg-zinc-900 overflow-hidden">
            <div className="stats__box h-full" key={index}>
              <h3 className="stats__no">{no}</h3>
              <p className="stats__title">{parse(title)}</p>
            </div>
          </BackgroundGradient>
        );
      })}
    </>
  );
};

export default Stats;

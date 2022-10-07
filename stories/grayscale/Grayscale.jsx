import "./Grayscale.scss";

import React from "react";

const generateColorScale = (steps = 11, color = "grayscale") => (
  <>
    {Array.from({ length: steps }, (v, i) => (
      <div className={"grayscale-stop"}>
        <span className={`grayscale-level-${i * 10}`} />
        {i * 10}
      </div>
    ))}
  </>
);

export const Grayscale = () => (
  <div className={"Grayscale"}>
    <div className={"row"}>
      <section className={"twelve-column"}>
        <h1>Grayscale</h1>
      </section>
    </div>
    <div className={"row"}>
      <section className={"twelve-column"}>
        <div className={"grayscale"}>{generateColorScale()}</div>
      </section>
    </div>
  </div>
);

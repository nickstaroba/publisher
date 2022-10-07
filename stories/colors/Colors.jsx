import "./Colors.scss";

import React from "react";

const generateColorScale = (steps = 11, color = "grayscale") => (
  <>
    {Array.from({ length: steps }, (v, i) => (
      <div className={`grayscale-stop grayscale-level-${i * 10}`} />
    ))}
  </>
);

export const Colors = () => (
  <div className={"Colors"}>
    <div className={"row"}>
      <section className={"twelve-column"}>
        <h1>Colors</h1>
      </section>
    </div>
    <div className={"row"}>
      <section className={"twelve-column"}>
        <div className={"px-scale"}>
          <div className={"px-scale-stop"}>
            <span className="alabaster" />
            Alabaster
          </div>
          <div className={"px-scale-stop"}>
            <span className="kobi" />
            Kobi
          </div>
          <div className={"px-scale-stop"}>
            <span className="mulled-wine" />
            Mulled Wine
          </div>
          <div className={"px-scale-stop"}>
            <span className="prelude" />
            Prelude
          </div>
          <div className={"px-scale-stop"}>
            <span className="prim" />
            Prim
          </div>
        </div>
      </section>
    </div>
  </div>
);

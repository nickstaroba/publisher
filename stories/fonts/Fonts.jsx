import "./Fonts.scss";

import { commerce } from "faker";
import React from "react";

export const Fonts = () => (
  <div className={"Fonts"}>
    <div className={"row"}>
      <section className={"twelve-column"}>
        <h1>Fonts</h1>
      </section>
    </div>
    <div className={"row"}>
      <section className={"six-column"}>
        <div className={"example-component"}>
          <h2>Body Font Weights</h2>

          <h3>Light (100)</h3>
          <p className={"light"}>{commerce.productDescription()}</p>

          <h3>Normal (400)</h3>
          <p className={"normal"}>{commerce.productDescription()}</p>

          <h3>Bold (700)</h3>
          <p className={"bold"}>{commerce.productDescription()}</p>

          <h3>Heavy (900)</h3>
          <p className={"heavy"}>{commerce.productDescription()}</p>
        </div>
      </section>
      <section className={"six-column"}>
        <div className={"example-component"}>
          <h2>Headings</h2>

          <h3>h1</h3>
          <section>
            <h1>{commerce.productName()}</h1>
          </section>

          <h3>h2</h3>
          <section>
            <h2>{commerce.productName()}</h2>
          </section>

          <h3>h3</h3>
          <section>
            <h3>{commerce.productName()}</h3>
          </section>

          <h3>h4</h3>
          <section>
            <h4>{commerce.productName()}</h4>
          </section>

          <h3>h5</h3>
          <section>
            <h5>{commerce.productName()}</h5>
          </section>

          <h3>h6</h3>
          <section>
            <h6>{commerce.productName()}</h6>
          </section>
        </div>
      </section>
    </div>
  </div>
);

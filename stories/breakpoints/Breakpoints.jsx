import "./Breakpoints.scss";

import React from "react";

import breakpoints from "../breakpoints/Breakpoints.scss";

export const Breakpoints = () => (
  <div className={"Breakpoints"}>
    <div className={"row"}>
      <section className={"twelve-column"}>
        <h1>Breakpoints</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
          {Object.keys(breakpoints).map((breakpoint) => (
            <tr>
              <td>{breakpoint}</td>
              <td>{breakpoints[breakpoint]}</td>
            </tr>
          ))}
        </table>
      </section>
    </div>
  </div>
);

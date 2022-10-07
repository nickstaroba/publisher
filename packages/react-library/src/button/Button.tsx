import clsx from "clsx";
import React from "react";

import s from "./Button.module.scss";

interface ButtonProps {
  className?: string;
  label: string;
}

export const Button = ({ className, label }: ButtonProps) => (
  <button className={clsx([s.button, className])}>{label}</button>
);

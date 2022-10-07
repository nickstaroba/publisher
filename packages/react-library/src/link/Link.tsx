import clsx from "clsx";
import React from "react";

import s from "./Link.module.scss";

interface LinkProps {
  className?: string;
  href: string;
  label: string;
}

export const Link = ({ className, href, label }: LinkProps) => (
  <a className={clsx([s.link, className])} href={href}>
    {label}
  </a>
);

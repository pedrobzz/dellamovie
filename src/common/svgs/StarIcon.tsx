import React from "react";
import { Icon } from "../../application/domain/components";

export const StarIcon: Icon = ({ width, active }) => (
  <svg
    width={width || "22"}
    height="auto"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9989 0C10.9989 5.5011 16.5 11 22 11C16.4989 11 11 16.9202 11 22C11 16.9202 5.4703 11 0 11C5.4714 11 10.9989 5.5011 10.9989 0Z"
      fill={active ? "#ECBD3B" : "#AAAAAA"}
    />
  </svg>
);

export default StarIcon;

import React from "react";
import { Icon } from "../../application/domain/components";

export const ChatIcon: Icon = ({ width, active }) => (
  <svg
    width={width || "28"}
    height="auto"
    viewBox="0 0 28 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4568 17.0002C13.4568 13.0508 17.1346 9.702 21.8148 9.702C22.9012 9.702 23.9876 9.9596 24.9914 10.304C24.9914 4.6368 19.3914 0 12.621 0C5.684 0 0 4.8076 0 10.5602C0 14.252 2.3408 17.6862 5.852 19.404V23.268C5.852 23.6978 6.1852 23.954 6.6864 23.6978L11.7012 21.1218H12.9556C13.5408 21.1218 14.126 21.1218 14.6272 20.9496C13.7914 19.747 13.4568 18.3736 13.4568 17.0002ZM21.8148 11.8482C18.305 11.8482 15.463 14.0812 15.463 17.0002C15.463 19.9192 18.305 22.323 21.7308 22.323H22.1494L22.9852 22.6674L24.3222 23.5256C24.7408 23.5256 25.158 23.5256 25.158 23.0104V21.4648C26.8296 20.6066 28 18.8888 28 17.0002C28 14.0812 25.242 11.8482 21.7308 11.8482H21.8148Z"
      fill={active ? "#F26A6C" : "#AAAAAA"}
    />
  </svg>
);

export default ChatIcon;

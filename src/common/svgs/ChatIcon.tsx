/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */
interface ChatIconProps {
  onClick: () => void;
}

export const ChatIcon = ({ onClick }: ChatIconProps): JSX.Element => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path
      d="M9.612 12.143C9.612 9.322 12.239 6.93 15.582 6.93C16.358 6.93 17.134 7.114 17.851 7.36C17.851 3.312 13.851 0 9.015 0C4.06 0 0 3.434 0 7.543C0 10.18 1.672 12.633 4.18 13.86V16.62C4.18 16.927 4.418 17.11 4.776 16.927L8.358 15.087H9.254C9.672 15.087 10.09 15.087 10.448 14.964C9.851 14.105 9.612 13.124 9.612 12.143ZM15.582 8.463C13.075 8.463 11.045 10.058 11.045 12.143C11.045 14.228 13.075 15.945 15.522 15.945H15.821L16.418 16.191L17.373 16.804C17.672 16.804 17.97 16.804 17.97 16.436V15.332C19.164 14.719 20 13.492 20 12.143C20 10.058 18.03 8.463 15.522 8.463H15.582Z"
      fill="#AAAAAA"
    />
  </svg>
);

export default ChatIcon;

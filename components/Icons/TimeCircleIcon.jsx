import React from "react";

const TimeCircleIcon = (props) => {
  const size = props.size || "20";
  const color = props.color || "currentColor";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="MuiTab-iconWrapper"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M10 20.0001C4.48 20.0001 0 15.5301 0 10.0001C0 4.4801 4.48 9.91821e-05 10 9.91821e-05C15.53 9.91821e-05 20 4.4801 20 10.0001C20 15.5301 15.53 20.0001 10 20.0001ZM13.19 13.7101C13.31 13.7801 13.44 13.8201 13.58 13.8201C13.83 13.8201 14.08 13.6901 14.22 13.4501C14.43 13.1001 14.32 12.6401 13.96 12.4201L10.4 10.3001V5.6801C10.4 5.2601 10.06 4.9301 9.65 4.9301C9.24 4.9301 8.9 5.2601 8.9 5.6801V10.7301C8.9 10.9901 9.04 11.2301 9.27 11.3701L13.19 13.7101Z" fill={color} />


    </svg>
  );
};

export default TimeCircleIcon;

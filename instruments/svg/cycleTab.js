import React from "react";
import Svg, { Path, Circle } from 'react-native-svg';

export const CycleTab = ({color}) => {
  return (
    <Svg
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 24 24"
    >
      <Circle cx="12" cy="12" r="11" stroke= {color} strokeWidth="2"></Circle>
      <Path fill= {color} d="M11 5H13V19H11z"></Path>
      <Path
        fill= {color}
        d="M19 11H21V25H19z"
        transform="rotate(90 19 11)"
      ></Path>
    </Svg>
  );
}



import React from "react";
import Svg, { Circle } from 'react-native-svg';

export const  MoreTab = ({ color }) =>  {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="4"
      fill= "none"
      viewBox="0 0 18 4"
    >
      <Circle cx="2" cy="2" r="2" fill= {color}></Circle>
      <Circle cx="9" cy="2" r="2" fill= {color}></Circle>
      <Circle cx="16" cy="2" r="2" fill= {color}></Circle>
    </Svg>
  );
}

export default MoreTab;
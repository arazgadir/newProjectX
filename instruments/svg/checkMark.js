import React from "react";
import Svg, { Path, Circle, G  } from 'react-native-svg';


export const CheckmarkIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <G fill="none" fillRule="evenodd">
        <Circle cx="7" cy="7" r="7" fill="#01BFAC"></Circle>
        <Path
          fill="#FFF"
          d="M5.924 9.697L3.49 7.273a.13.13 0 01-.035-.049c-.009-.018-.009-.038-.009-.058 0-.02 0-.04.01-.058a.121.121 0 01.034-.048l.613-.616c.061-.06.157-.06.21 0l1.61 1.595a.148.148 0 00.21-.001l3.543-3.58a.157.157 0 01.22 0l.612.615a.147.147 0 010 .213L6.65 9.183v.001l-.508.512a.156.156 0 01-.218 0z"
        ></Path>
      </G>
    </Svg>
  );
}

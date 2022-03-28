import React from "react";
import Svg, { Path } from 'react-native-svg';

export const MainIcon = ({color }) => {
  return (
    <Svg
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 28 28"
    >
      <Path
        fill= {color}
        fillRule="evenodd"
        d="M23.599 11.8v.004L26 14.002l-1.7 1.556-.701-.643V25h-8.4v-4.4h-2.4V25H4.4V14.894l-.706.653L2 13.99 14.002 3l9.597 8.8zm-6 11h3.6V12.715l-7.212-6.61-7.187 6.59V22.8h3.6v-4.4h7.2v4.4z"
        clipRule="evenodd"
      ></Path>
    </Svg>
  );
}


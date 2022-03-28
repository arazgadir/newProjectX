import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SearchIcon = ({color}) => {
  return (
  <Svg width={25} height={25} viewBox="0 0 23 23" fill="none" >
      <Path
        d="M21.75 21.75l-4.86-4.869 4.86 4.869zm-2.167-11.375a9.208 9.208 0 11-18.417 0 9.208 9.208 0 0118.417 0v0z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
  </Svg>
)
}

import React from 'react'

export default function Arrow({className, fill, height, style, width}) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      width={width}
      height={height}
      style={style}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        stroke="none"
        transform="translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000) "
        d="M32 32 32 27.5992141 5.00813008 15.9685658 32 4.27504912 32 0 0 13.956778 0 17.9803536 15.8090702 24.9065278z"
      />
    </svg>
  )
}

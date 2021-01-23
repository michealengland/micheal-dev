import React from 'react'
// import styled from '@emotion/styled'
import Arrow from './ArrowIcon'
import styles from './Logo.module.css'

// const LogoWrapper = styled.div`
//   align-items: center;
//   color: #141826;
//   background: #f5fffe;
//   display: flex;
//   justify-content: center;
//   position: relative;
//   height: 100vh;
//   width: 100vw;
//   > div {
//     position: relative;
//     text-align: center;
//   }
//   svg {
//     fill: currentColor;
//     position: relative;
//     width: 35vw;
//     height: auto;
//     &:first-child {
//       animation: rotate-left 1s linear 3s;
//       animation-fill-mode: forwards;
//       margin-right: 4vw;
//       margin-left: -4vw;
//       transform: rotate(-90deg);
//     }
//     &:nth-child(2) {
//       animation: rotate-right 1s linear 3s;
//       animation-fill-mode: forwards;
//       margin-right: -4vw;
//       margin-left: 4vw;
//       transform: rotate(90deg);
//     }
//   }
// `

export default function Logo(className){
  return(
    <div className={className}>
      <div>
        <Arrow fill="currentColor" width={200} height={200} />
        <Arrow fill="currentColor" width={200} height={200} />
      </div>
    </div>
  )
}

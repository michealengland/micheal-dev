import React from 'react'
import styles from './logo.css'
import {ReactComponent as ArrowIcon} from './arrow.svg'

export default function Logo() {
  return (
    <span className={styles.logo}>
      <ArrowIcon />
      <ArrowIcon />
    </span>
  )
}

import React from 'react'
import styles from './Logo.module.css'
import ArrowIcon from './arrow.svg'

export default function Logo() {
  return (
    <span className={styles.logo}>
      <ArrowIcon />
      <ArrowIcon />
    </span>
  )
}

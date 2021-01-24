import React from 'react'
import Arrow from './ArrowIcon'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <span className={styles.logo}>
      <Arrow fill="currentColor" width={200} height={200} />
      <Arrow fill="currentColor" width={200} height={200} />
    </span>
  )
}

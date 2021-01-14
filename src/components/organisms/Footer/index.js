import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {new Date().getFullYear()} Mike England, Built with <a href="https://www.gatsbyjs.org">Gatsby</a></p>
      </div>
    </footer>
  )
}

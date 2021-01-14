import React from 'react'
import Link from '@components/atoms/Link'
import Logo from '@content/assets/me-icon.png'
import styles from './Header.module.css'

export default function Header() {
  return <header className={styles.header}>
    <div className={styles.logo}>
      <Link to={ '/' }>
        <img src={ Logo } alt="Micheal.dev logo" />
      </Link>
    </div>
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link to={ '/blog' }>Blog</Link>
        </li>
      </ul>
    </nav>
  </header>
}

import React from 'react'
import Link from '@components/atoms/Link'
import Logo from '@content/assets/me-icon.png'
import styles from './Header.module.css'

export default function Header() {
  return <header className={styles.header}>
    <h1 className={styles.logo}>
      <Link to={ '/' }>
        <img src={ Logo } alt="Micheal.dev logo" />
      </Link>
    </h1>
    <nav>
      <ul>
        <li>
          <Link to={ '/blog' }>Blog</Link>
        </li>
      </ul>
    </nav>
  </header>
}

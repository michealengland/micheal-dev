import React from 'react'
import TextLink from '@components/atoms/TextLink'
import Logo from '@content/assets/me-icon.png'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <TextLink to={ '/' }>
            <img src={ Logo } alt="Micheal.dev logo" />
          </TextLink>
        </div>
        <nav className={styles.menu}>
          <ul>
            <li>
              <TextLink to={ '/blog' }>Blog</TextLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

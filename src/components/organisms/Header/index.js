import React from 'react'
import TextLink from '@components/atoms/TextLink'
// import Logo from '@content/assets/me-icon.png'
import Logo from '@components/atoms/Logo'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <TextLink className={styles.logo} to={'/'}>
          <Logo />
        </TextLink>
        <nav className={styles.menu}>
          <ul>
            <li>
              <TextLink to={'/blog'}>Blog</TextLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

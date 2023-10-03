import React from 'react'
import Avatar from '@assets/mike-in-prague-2-500x500.jpg'
import styles from './AuthorBio.module.css'

export default function AuthorBio() {
  return (
    <div className={styles.authorBio}>
      <img className={styles.avatar} src={Avatar.src} alt="Micheal England" />
      <p className={styles.content}>
        Article by <strong>Micheal England</strong>.
      </p>
    </div>
  )
}

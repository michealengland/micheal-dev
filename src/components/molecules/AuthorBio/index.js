'use client'
import React from 'react'
import Avatar from '@assets/mike-in-prague-2-500x500.jpg'
import styles from './AuthorBio.module.css'
import Image from 'next/image'

export default function AuthorBio() {
  return (
    <div className={styles.authorBio}>
      <Image
        className={styles.avatar}
        src={Avatar?.src} // Testing to see if this fixes an issue.
        alt="Micheal England"
        width={100}
        height={100}
        unoptimized={false} // Testing to see if this fixes an issue.
      />
      <p className={styles.content}>
        Article by <strong>Micheal England</strong>.
      </p>
    </div>
  )
}

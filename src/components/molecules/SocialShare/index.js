import React from 'react'
import styles from './SocialShare.module.css'

export default function SocialShare() {
  const socialAccounts = [
    {
      icon: '',
      label: 'Github',
      url: 'https://github.com/michealengland'
    },
    {
      icon: '',
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/michealengland/'
    },
    {
      icon: '',
      label: 'Twitter',
      url: 'https://twitter.com/mikelikethebike'
    },
  ]

  return (
    <nav className={styles.socialShare} role="navigation" aria-label="social links">
      <ul>
        { socialAccounts.map((account) => {
          const {icon, label, url} = account

          return (
            <li key={`social-${icon}`}>
              <a href={url}>
                <span className={styles.icon}>{icon}</span>
                <span className={styles.label}>{label}</span>
              </a>
            </li>
          )
        }) }
      </ul>
    </nav>
  )
}
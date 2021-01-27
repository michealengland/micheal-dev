import React from 'react'
import styles from './SocialShare.module.css'
import Icon from '@components/atoms/Icon'

export default function SocialShare() {
  const socialAccounts = [
    {
      icon: 'twitter',
      label: 'Github',
      url: 'https://github.com/michealengland'
    },
    {
      icon: 'twitter',
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/michealengland/'
    },
    {
      icon: 'twitter',
      label: 'Twitter',
      url: 'https://twitter.com/mikelikethebike'
    },
  ]

  return (
    <nav className={styles.socialShare} role="navigation" aria-label="social links">
      <ul>
        { socialAccounts.map((account, index) => {
          const {icon, label, url} = account

          return (
            <li key={`social-${index}`}>
              <a href={url} target="_blank" rel="noreferrer">
                <span className={styles.icon}><Icon icon={icon} /></span>
                <span className={styles.label}>{label}</span>
              </a>
            </li>
          )
        }) }
      </ul>
    </nav>
  )
}
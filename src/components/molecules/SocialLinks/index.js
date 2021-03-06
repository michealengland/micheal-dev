import React from 'react'
import styles from './SocialLinks.module.css'
import Icon from '@components/atoms/Icon'

export default function SocialLinks() {
  const socialAccounts = [
    {
      icon: 'github',
      label: 'Github',
      url: 'https://github.com/michealengland'
    },
    {
      icon: 'linkedin',
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
    <nav className={styles.socialLinks} role="navigation" aria-label="social links">
      <ul>
        { socialAccounts.map((account, index) => {
          const {icon, label, url} = account

          return (
            <li key={`social-${index}`}>
              <a href={url} target="_blank" rel="noreferrer">
                <Icon className={styles.icon} icon={icon} title={label} />
                <span className={styles.label}>{label}</span>
              </a>
            </li>
          )
        }) }
      </ul>
    </nav>
  )
}
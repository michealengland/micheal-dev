import React from 'react'
import Link from '@components/atoms/Link'
import Logo from '../../../../content/assets/me-icon.png'

export default function Header() {
  return <header>
    <h1>
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'inherit',
        }}
        to={ '/' }
      >
        <img src={ Logo } alt="Micheal.dev logo" />
      </Link>
    </h1>
    <nav>
      <ul>
        <li>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={ '/blog' }
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  </header>
}
